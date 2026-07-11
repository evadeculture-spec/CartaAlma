<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Integração e deploy

O site live é publicado automaticamente pela Vercel a partir do branch por defeito (`claude/carta-alma-mvp-rxpg3i`). Depois de terminar e verificar qualquer alteração (build a passar), integra-a sempre nesse branch e faz push — o utilizador só quer atualizar a página para ver as modificações. Não deixes trabalho terminado por integrar num feature branch.
