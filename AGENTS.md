<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Integração e deploy

O site live é publicado automaticamente pela Vercel a partir do branch por defeito (`claude/carta-alma-mvp-rxpg3i`). Depois de terminar e verificar qualquer alteração (build a passar), integra-a sempre nesse branch e faz push — o utilizador só quer atualizar a página para ver as modificações. Não deixes trabalho terminado por integrar num feature branch.

# Qualidade de imagens e vídeos

O site serve os ficheiros de `public/` byte a byte — a Vercel não recomprime nada. Se algo aparece com pouca qualidade, a causa está no ficheiro fonte ou na forma como é apresentado. Regras obrigatórias antes de integrar qualquer media:

1. **Verifica sempre a resolução e o aspect ratio reais do ficheiro** (não assumas o formato pedido no prompt). Para vídeo, lê as dimensões do MP4; para imagem, abre-a. Apresenta cada media no seu formato natural — nunca uses `object-cover` com um aspect ratio forçado sem confirmar que coincide com o do ficheiro, porque corta e amplia o conteúdo.
2. **Exige originais**: imagens com pelo menos 2× o tamanho a que vão ser mostradas; vídeo idealmente 1080p+. Um recorte de screenshot ou um export comprimido é um paliativo — se for usado, avisa o utilizador e pede o ficheiro original do Higgsfield (download direto da galeria) para o substituir.
3. As ferramentas MCP do Higgsfield e o CDN deles podem estar bloqueados neste ambiente — o caminho fiável para receber media é o utilizador anexar o ficheiro original na conversa.
