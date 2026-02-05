
# Plano: Sessao de Trafego Pago com Estrategia Ultra Segmentada

## Resumo
Criar uma nova sessao na landing page focada em **Trafego Pago** com estrategia ultra segmentada e gestao orcamentaria. A sessao apresentara um infografico visual com as 4 fases do processo, com um mockup de MacBook exibindo a biblioteca de anuncios Meta posicionado a direita.

---

## Estrutura Visual

```text
+------------------------------------------------------------------+
|                     [Badge] Trafego Pago                          |
|                                                                   |
|          Estrategia Ultra Segmentada                              |
|          Gestao Orcamentaria Inteligente                          |
|                                                                   |
|  +------------------------+     +-----------------------------+   |
|  |                        |     |      [MacBook Mockup]       |   |
|  |  [4 FASES INFOGRAFICO] |     |                             |   |
|  |                        |     |   [Print Meta Ads Library]  |   |
|  |  01. Compra de Dados   |     |                             |   |
|  |  02. Otimizacao Estrat.|     |                             |   |
|  |  03. Escala da Oferta  |     |                             |   |
|  |  04. Gestao Orcament.  |     |                             |   |
|  |                        |     |                             |   |
|  +------------------------+     +-----------------------------+   |
|                                                                   |
|                     [CTA Button]                                  |
+------------------------------------------------------------------+
```

---

## Arquivos a Criar/Modificar

### 1. Copiar imagem do print Meta Ads Library
- **De:** `user-uploads://image-57.png`
- **Para:** `src/assets/meta-ads-library.png`

### 2. Copiar imagem do MacBook mockup
- **De:** `user-uploads://image-58.png`  
- **Para:** `src/assets/macbook-mockup.png`

### 3. Criar novo componente `TrafficSection.tsx`
**Caminho:** `src/components/landing/TrafficSection.tsx`

**Conteudo:**
- Badge: "Trafego Pago" com icone de Target
- Headline: "Estrategia Ultra Segmentada" (com gradiente) + "Foco em Lucro Operacional"
- Subtitulo contextual sobre gestao orcamentaria e maximizacao de ROAS
- Layout grid de 2 colunas (md:grid-cols-2)
  - **Coluna Esquerda:** Infografico vertical com as 4 fases
  - **Coluna Direita:** MacBook mockup com a imagem da biblioteca Meta inserida na tela

### 4. As 4 Fases (Infografico)
Cada fase tera:
- Numero grande de fundo (01, 02, 03, 04)
- Icone representativo
- Titulo
- Descricao curta

| Fase | Titulo | Descricao | Icone |
|------|--------|-----------|-------|
| 01 | Compra de Dados | Captacao inteligente de leads qualificados com segmentacao precisa | Database |
| 02 | Otimizacao Estrategica | Ajustes baseados em metricas reais para maximizar performance | TrendingUp |
| 03 | Escala da Oferta | Ampliacao do investimento nos canais que comprovadamente convertem | ArrowUpRight |
| 04 | Gestao Orcamentaria | Controle fino do investimento com foco em lucro operacional | DollarSign/Wallet |

### 5. MacBook Mockup
- Usar a imagem do MacBook como moldura
- Posicionar a imagem do print Meta Ads Library dentro da tela
- Aplicar efeitos de sombra e glow para destaque visual
- Considerar uma leve animacao de float para dinamismo

### 6. Atualizar Index.tsx
Adicionar importacao e posicionar a nova sessao na pagina:
- **Posicao sugerida:** Antes da `FunnelSection`, logo apos `MechanismSection`
- Isso cria um fluxo logico: Problema -> Mecanismo -> Trafego Pago -> DM IA CRM -> Funil

---

## Detalhes Tecnicos

### Componente TrafficSection

```text
Estrutura:
- section com id="trafego-pago" e classes py-24 relative overflow-hidden
- Background com gradientes blur (similar ao FunnelSection)
- Container com max-w-6xl mx-auto
- Header central com badge, h2 e p
- Grid lg:grid-cols-2 gap-8 items-center
  - Coluna 1: div com as 4 fases em cards verticais
  - Coluna 2: div com MacBook mockup (imagem posicionada absolutamente)
```

### Estilo das Fases (Cards)
```text
- glass-card com hover-lift
- Numero grande absoluto no canto (text-6xl text-primary/10)
- Icone em div com bg-primary/20 rounded-lg
- Titulo em font-bold text-lg
- Descricao em text-muted-foreground text-sm
- Linha conectora vertical entre cards (opcional)
```

### Mockup do MacBook
```text
- Container relativo para posicionamento
- Imagem do MacBook como base
- Container interno posicionado para a area da tela
- Imagem do Meta Ads Library com object-cover
- Possivel animacao de entrada fade-in
```

### Cores e Gradientes
- Usar a paleta primaria (azul) existente
- Badge com bg-primary/10 e border-primary/20
- Headline com classe text-gradient
- Manter consistencia visual com as outras sessoes

---

## Posicao na Pagina

Ordem atualizada das sessoes:
1. Hero
2. StatsSection
3. ProblemSection
4. MechanismSection
5. **TrafficSection** (NOVA)
6. DmIaSection
7. FunnelSection
8. AutomationSection
9. ... (demais sessoes)

---

## CTA da Sessao
- Texto: "Quero Escalar com Estrategia"
- Link: #diagnostico
- Estilo: Button variant="hero" size="lg"

