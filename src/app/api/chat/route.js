import { NextResponse } from 'next/server';

const CODEGPT_URL = 'https://api.codegpt.co/api/v1/chat/completions';
const MAX_MESSAGE_LENGTH = 2000;

export async function POST(request) {
  const apiKey =
    process.env.CODEGPT_API_KEY ?? process.env.NEXT_PUBLIC_API_KEY_CODE;
  const agentId =
    process.env.CODEGPT_AGENT_ID ?? process.env.NEXT_PUBLIC_AGENT_ID;

  if (!apiKey || !agentId) {
    return NextResponse.json(
      { error: 'El asistente no está disponible temporalmente.' },
      { status: 503 },
    );
  }

  let message;
  try {
    const body = await request.json();
    message = typeof body.message === 'string' ? body.message.trim() : '';
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 });
  }

  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: 'Escribe un mensaje válido de hasta 2000 caracteres.' },
      { status: 400 },
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch(CODEGPT_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stream: false,
        format: 'json',
        agentId,
        messages: [{ role: 'user', content: message }],
      }),
      cache: 'no-store',
      signal: controller.signal,
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'El asistente no pudo responder.' },
        { status: 502 },
      );
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content;

    if (typeof answer !== 'string' || !answer.trim()) {
      return NextResponse.json(
        { error: 'El asistente devolvió una respuesta inválida.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ answer });
  } catch {
    return NextResponse.json(
      { error: 'El asistente no está disponible temporalmente.' },
      { status: 502 },
    );
  } finally {
    clearTimeout(timeout);
  }
}
