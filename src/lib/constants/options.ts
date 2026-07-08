import {
  Cake,
  Heart,
  CloudMoon,
  HandHeart,
  HeartHandshake,
  Handshake,
  Gem,
  Baby,
  Flower2,
  UserRound,
  TreePine,
  DoorOpen,
  Users,
  BookHeart,
  Clock,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface OccasionOption {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export const occasions: OccasionOption[] = [
  { value: "aniversario", label: "Aniversário", description: "Celebrar mais um ano de vida.", icon: Cake },
  { value: "amor", label: "Amor", description: "Dizer o que o coração já sabe.", icon: Heart },
  { value: "saudade", label: "Saudade", description: "Para quem está longe, ou já partiu.", icon: CloudMoon },
  { value: "agradecimento", label: "Agradecimento", description: "Reconhecer o que fizeram por ti.", icon: HandHeart },
  { value: "pedido-desculpa", label: "Pedido de desculpa", description: "Assumir, com dignidade.", icon: HeartHandshake },
  { value: "reconciliacao", label: "Reconciliação", description: "Reaproximar com respeito.", icon: Handshake },
  { value: "casamento", label: "Casamento", description: "Celebrar uma união.", icon: Gem },
  { value: "nascimento", label: "Nascimento", description: "Dar as boas-vindas a uma nova vida.", icon: Baby },
  { value: "dia-da-mae", label: "Dia da Mãe", description: "Para quem te deu tudo.", icon: Flower2 },
  { value: "dia-do-pai", label: "Dia do Pai", description: "Para quem te ensinou o caminho.", icon: UserRound },
  { value: "natal", label: "Natal", description: "A época de reunir quem se ama.", icon: TreePine },
  { value: "despedida", label: "Despedida", description: "Um fecho com serenidade.", icon: DoorOpen },
  { value: "carta-avos", label: "Carta para avós", description: "Ternura, gratidão e memória.", icon: Users },
  { value: "memoria-familiar", label: "Memória familiar", description: "Guardar uma história para sempre.", icon: BookHeart },
  { value: "carta-futura", label: "Carta futura", description: "Escrever hoje para abrir amanhã.", icon: Clock },
  { value: "so-porque-sim", label: "Só porque sim", description: "Sem motivo. Só porque merece.", icon: Sparkles },
];

export interface ToneOption {
  value: string;
  label: string;
  description: string;
}

export const tones: ToneOption[] = [
  { value: "emocional", label: "Emocional", description: "Direto ao coração." },
  { value: "elegante", label: "Elegante", description: "Cuidado em cada palavra." },
  { value: "simples", label: "Simples", description: "Sem voltas, com verdade." },
  { value: "romantico", label: "Romântico", description: "Intimidade sem exagero." },
  { value: "profundo", label: "Profundo", description: "Para o que pesa mais." },
  { value: "familiar", label: "Familiar", description: "Como se conversassem à mesa." },
  { value: "formal", label: "Formal", description: "Respeitoso e composto." },
  { value: "poetico", label: "Poético", description: "Com alma e imagens." },
  { value: "agradecido", label: "Agradecido", description: "Reconhecimento genuíno." },
  { value: "arrependido", label: "Arrependido", description: "Responsabilidade sem drama." },
  { value: "sereno", label: "Sereno", description: "Calma, mesmo no difícil." },
  { value: "nostalgico", label: "Nostálgico", description: "Memória viva no presente." },
];

export interface RelationshipOption {
  value: string;
  label: string;
}

export const relationships: RelationshipOption[] = [
  { value: "mae", label: "Mãe" },
  { value: "pai", label: "Pai" },
  { value: "avo", label: "Avó" },
  { value: "avo-m", label: "Avô" },
  { value: "parceiro", label: "Parceiro/a" },
  { value: "conjuge", label: "Marido/Mulher" },
  { value: "amigo", label: "Amigo/a" },
  { value: "irmao", label: "Irmão/Irmã" },
  { value: "filho", label: "Filho/a" },
  { value: "colega", label: "Colega" },
  { value: "cliente", label: "Cliente" },
  { value: "outra", label: "Outra" },
];

export interface ProductOption {
  slug: string;
  name: string;
  priceLabel: string;
  priceCents: number | null;
  tagline: string;
  features: string[];
  badge?: "free" | "premium" | "soon" | "manual";
}

export const products: ProductOption[] = [
  {
    slug: "lembrete-alma",
    name: "Lembrete Alma",
    priceLabel: "Grátis",
    priceCents: 0,
    tagline: "Para nunca mais deixares passar uma data.",
    features: [
      "Guardar datas importantes",
      "Receber lembretes por email",
      "Sugestões de carta",
    ],
    badge: "free",
  },
  {
    slug: "carta-essencial",
    name: "Carta Essencial",
    priceLabel: "7,90 €",
    priceCents: 790,
    tagline: "O essencial para chegar a tempo e com cuidado.",
    features: [
      "Carta gerada com ajuda de IA",
      "Edição e aprovação total",
      "Impressão e envelope",
      "Envio físico incluído",
    ],
  },
  {
    slug: "carta-premium",
    name: "Carta Premium",
    priceLabel: "14,90 €",
    priceCents: 1490,
    tagline: "Papel superior para palavras que pesam mais.",
    features: [
      "Papel premium",
      "Envelope superior",
      "Acabamento especial",
      "Preview visual cuidado",
      "Envio físico incluído",
    ],
    badge: "premium",
  },
  {
    slug: "kit-alma",
    name: "Kit Alma",
    priceLabel: "24,90 €",
    priceCents: 2490,
    tagline: "Para escreveres tu mesmo, com tudo à mão.",
    features: [
      "Papel premium e envelopes",
      "Guia de escrita emocional",
      "Caneta opcional",
      "Selo e instruções",
    ],
  },
  {
    slug: "carta-manuscrita",
    name: "Carta Manuscrita",
    priceLabel: "Sob pedido",
    priceCents: null,
    tagline: "Escrita à mão por um escriba profissional.",
    features: [
      "Caligrafia cuidada",
      "Escrita por profissional",
      "Acabamento premium",
      "Preparado manualmente pela equipa Carta Alma",
    ],
    badge: "manual",
  },
];
