import { normalizeSearchText } from './normalize.mjs';

const joinSearchValues = (values) => normalizeSearchText(
  values.filter(Boolean).join(' '),
);

export const buildFaqSearchIndex = (faqs) => faqs.map((faq) => {
  const { searchProductNames = [], ...publicFaq } = faq;
  const question = normalizeSearchText(faq.question);
  const answer = joinSearchValues([faq.answer, ...(faq.answerItems ?? [])]);
  const category = joinSearchValues([faq.category?.id, faq.category?.name]);
  const tags = joinSearchValues(
    (faq.tags ?? []).flatMap((tag) => [tag.id, tag.name]),
  );
  const keywords = joinSearchValues(faq.keywords ?? []);
  const products = joinSearchValues(
    [
      ...(faq.relatedProducts ?? []).flatMap((product) => [product.id, product.name]),
      ...searchProductNames,
    ],
  );
  const lines = joinSearchValues(
    (faq.lines ?? []).flatMap((line) => [line.id, line.name]),
  );
  const applications = joinSearchValues(faq.applications ?? []);

  return {
    ...publicFaq,
    searchIndex: {
      question,
      answer,
      category,
      tags,
      keywords,
      products,
      lines,
      applications,
      all: joinSearchValues([
        question,
        answer,
        category,
        tags,
        keywords,
        products,
        lines,
        applications,
      ]),
    },
  };
});

export const scoreFaqMatch = (faq, normalizedQuery) => {
  if (!normalizedQuery) {
    return 0;
  }

  const terms = [...new Set(normalizedQuery.split(' ').filter(Boolean))];

  if (!terms.every((term) => faq.searchIndex.all.includes(term))) {
    return -1;
  }

  let score = faq.searchIndex.question === normalizedQuery ? 100 : 0;

  if (faq.searchIndex.question.includes(normalizedQuery)) {
    score += 60;
  }

  terms.forEach((term) => {
    if (faq.searchIndex.question.includes(term)) score += 60;
    if (faq.searchIndex.products.includes(term)) score += 50;
    if (faq.searchIndex.tags.includes(term)) score += 40;
    if (faq.searchIndex.keywords.includes(term)) score += 35;
    if (faq.searchIndex.applications.includes(term)) score += 30;
    if (faq.searchIndex.category.includes(term)) score += 25;
    if (faq.searchIndex.lines.includes(term)) score += 25;
    if (faq.searchIndex.answer.includes(term)) score += 15;
  });

  return score;
};

export const searchFaqs = (
  faqs,
  { query = '', categoryId = '', tagId = '', lineId = '' } = {},
) => {
  const normalizedQuery = normalizeSearchText(query);

  return faqs
    .filter((faq) => !categoryId || faq.categoryId === categoryId)
    .filter((faq) => !tagId || faq.tagIds.includes(tagId))
    .filter((faq) => !lineId || faq.lineIds.includes(lineId))
    .map((faq) => ({ faq, score: scoreFaqMatch(faq, normalizedQuery) }))
    .filter(({ score }) => score >= 0)
    .sort((left, right) => (
      right.score - left.score
      || left.faq.sortOrder - right.faq.sortOrder
      || left.faq.question.localeCompare(right.faq.question, 'es')
    ))
    .map(({ faq }) => faq);
};
