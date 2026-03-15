import {
  Activity,
  ArrowRight,
  Bot,
  Braces,
  BrainCircuit,
  Cable,
  CircleAlert,
  Coins,
  Command,
  Database,
  GitBranch,
  Layers3,
  Radar,
  ScrollText,
  Shield,
  Slack,
  Sparkles,
  SquareStack,
  Workflow
} from "lucide-react";

const navItems = ["Platform", "OpenClaw", "Governance", "Developers", "Vision"];

const runtimeNodes = [
  { name: "ResearchAgent", top: "16%", left: "10%", tone: "violet" },
  { name: "LLM Model", top: "10%", left: "43%", tone: "blue" },
  { name: "Browser Tool", top: "34%", left: "30%", tone: "green" },
  { name: "Stripe API", top: "56%", left: "64%", tone: "red" },
  { name: "FinanceAgent", top: "68%", left: "18%", tone: "blue" },
  { name: "Slack", top: "24%", left: "74%", tone: "green" },
  { name: "WriterAgent", top: "78%", left: "46%", tone: "violet" }
];

const problemCards = [
  "Operators cannot understand why agents made decisions",
  "Tool calls create hidden data access paths",
  "Token usage and cost explode without visibility",
  "Agent interactions become complex multi-system workflows"
];

const featureCards = [
  {
    icon: GitBranch,
    title: "Runtime Agent Graph",
    copy: "Visualize agents, tools, APIs, models, and data systems as one connected execution graph.",
    accent: "blue",
    lines: ["Graph rebuilt from live execution events", "14 agents", "63 tools", "221 active edges"]
  },
  {
    icon: BrainCircuit,
    title: "Decision Path Tracing",
    copy: "Replay agent reasoning steps, prompts, tool calls, and downstream effects with runtime context.",
    accent: "violet",
    lines: ["reason", "tool_call", "observation", "handoff"]
  },
  {
    icon: Coins,
    title: "Agent Cost Intelligence",
    copy: "Track token usage and cost per workflow, per agent, and per tool invocation.",
    accent: "green",
    lines: ["ResearchAgent 18.4k tokens", "WriterAgent $2.14 run cost", "Forecast +41% today"]
  },
  {
    icon: Radar,
    title: "Blast Radius Mapping",
    copy: "Understand which systems an agent can reach across tools, APIs, data stores, and identities.",
    accent: "red",
    lines: ["payments.write", "crm.export", "docs.read", "slack.postMessage"]
  },
  {
    icon: ScrollText,
    title: "Execution Timeline",
    copy: "Step through every run from initial prompt to terminal action in exact event order.",
    accent: "blue",
    lines: ["00ms prompt.received", "214ms model.deliberation", "480ms browser.search", "912ms slack.postMessage"]
  }
];

const governanceAlerts = [
  {
    title: "FinanceAgent calling payment API repeatedly",
    detail: "14 repeated `stripe.refund.create` calls across a single execution path.",
    tone: "red"
  },
  {
    title: "Token usage spike",
    detail: "ResearchAgent exceeded expected context budget by 2.8x over the last 15 minutes.",
    tone: "green"
  },
  {
    title: "Unauthorized data query",
    detail: "WriterAgent attempted `warehouse.customers.export` without matching policy scope.",
    tone: "red"
  }
];

const developerFeatures = [
  "Local agent instrumentation",
  "OpenClaw runtime integration",
  "Event streaming API",
  "SDK for agent frameworks"
];

const footerColumns = {
  Product: ["Runtime Graph", "Tracing", "OpenClaw", "Architecture"],
  Developers: ["Docs", "SDK", "Instrumentation", "API Reference"],
  Company: ["About", "Contact", "Security", "Careers"]
};

function SectionHeader({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title text-balance">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

function HeroGraph() {
  return (
    <div className="panel relative min-h-[520px] overflow-hidden p-6 sm:p-8">
      <div className="grid-overlay absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(89,110,255,0.18),transparent_38%)]" />
      <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-medium text-muted backdrop-blur">
        <span className="status-dot" />
        Live agent system
      </div>
      <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-medium text-muted backdrop-blur">
        182 events/min
      </div>

      <div className="absolute left-[18%] top-[25%] h-px w-[34%] rotate-[10deg] bg-gradient-to-r from-violetglow/0 via-violetglow/80 to-blueglow/0 shadow-[0_0_18px_rgba(109,94,248,0.45)] graph-signal" />
      <div className="absolute left-[38%] top-[18%] h-px w-[36%] rotate-[18deg] bg-gradient-to-r from-blueglow/0 via-blueglow/80 to-tealglow/0 shadow-[0_0_18px_rgba(79,107,255,0.45)] graph-signal delay-150" />
      <div className="absolute left-[32%] top-[42%] h-px w-[38%] -rotate-[16deg] bg-gradient-to-r from-tealglow/0 via-tealglow/80 to-red-400/0 shadow-[0_0_18px_rgba(45,212,191,0.38)] graph-signal delay-300" />
      <div className="absolute left-[23%] top-[60%] h-px w-[30%] rotate-[11deg] bg-gradient-to-r from-blueglow/0 via-blueglow/70 to-violetglow/0 shadow-[0_0_18px_rgba(79,107,255,0.35)] graph-signal delay-500" />
      <div className="absolute left-[50%] top-[60%] h-px w-[20%] -rotate-[28deg] bg-gradient-to-r from-red-400/0 via-red-400/70 to-tealglow/0 shadow-[0_0_18px_rgba(248,113,113,0.35)] graph-signal delay-700" />

      {runtimeNodes.map((node) => (
        <div
          key={node.name}
          className={`graph-node graph-node-${node.tone} absolute`}
          style={{ top: node.top, left: node.left }}
        >
          <span className="status-dot" />
          {node.name}
        </div>
      ))}

      <div className="absolute bottom-6 left-6 right-6 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[28px] border border-white/10 bg-black/45 p-5 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Execution Graph</p>
              <p className="mt-1 text-sm text-muted">
                Non-deterministic runtime path reconstructed from live agent events.
              </p>
            </div>
            <div className="rounded-full border border-tealglow/20 bg-tealglow/10 px-3 py-1 text-xs font-medium text-tealglow">
              Active
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["Active agents", "12"],
              ["Tool calls", "438 / hour"],
              ["Model turns", "1,902"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
                <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-black/45 p-5 backdrop-blur">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-white">Latest Events</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Live ticker</p>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            {[
              ["ResearchAgent", "browser.search", "480ms", "green"],
              ["FinanceAgent", "stripe.charge.lookup", "132ms", "red"],
              ["WriterAgent", "slack.postMessage", "74ms", "blue"],
              ["ResearchAgent", "llm.completion", "2.1s", "violet"]
            ].map(([agent, event, latency, tone]) => (
              <div key={`${agent}-${event}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`signal-pill signal-pill-${tone}`} />
                    <span className="font-medium text-white">{agent}</span>
                  </div>
                  <span className="text-xs text-muted">{latency}</span>
                </div>
                <p className="mt-2 text-muted">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="panel p-6 sm:p-8">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
        {[
          ["OpenClaw Agents", "Bot", "Autonomous agents reasoning, planning, and coordinating."],
          ["Instrumentation Layer", "Cable", "Runtime hooks emit prompts, tool calls, and decisions."],
          ["Control Plane", "Layers3", "Events are normalized into a real-time execution model."],
          ["Visual Agent System Graph", "Workflow", "Operators inspect dynamic paths, costs, and alerts."]
        ].map(([title, icon, copy], index) => {
          const Icon =
            icon === "Bot" ? Bot : icon === "Cable" ? Cable : icon === "Layers3" ? Layers3 : Workflow;

          return (
            <div key={title} className="contents">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                  <Icon className="h-5 w-5 text-blueglow" />
                </div>
                <p className="mt-5 text-lg font-semibold text-white">{title}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
              </div>
              {index < 3 ? (
                <div className="hidden items-center justify-center lg:flex">
                  <ArrowRight className="h-5 w-5 text-muted" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FeatureScreenshot({
  title,
  accent,
  lines
}: {
  title: string;
  accent: string;
  lines: string[];
}) {
  const accentClass =
    accent === "violet"
      ? "from-violetglow/20 to-violetglow/5"
      : accent === "green"
        ? "from-tealglow/20 to-tealglow/5"
        : accent === "red"
          ? "from-red-400/20 to-red-400/5"
          : "from-blueglow/20 to-blueglow/5";

  const dotClass =
    accent === "violet"
      ? "bg-violetglow"
      : accent === "green"
        ? "bg-tealglow"
        : accent === "red"
          ? "bg-red-400"
          : "bg-blueglow";

  return (
    <div className={`rounded-[24px] border border-white/10 bg-gradient-to-br ${accentClass} p-4`}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-white">{title}</p>
        <div className="flex items-center gap-1.5">
          <span className={`h-2.5 w-2.5 rounded-full ${dotClass}`} />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {lines.map((line) => (
          <div key={line} className="rounded-2xl border border-white/10 bg-black/25 px-3 py-3 text-sm text-muted">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <nav className="sticky top-0 z-50 border-b border-white/8 bg-canvas/75 backdrop-blur-xl">
        <div className="container-shell flex h-20 items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
              <Command className="h-5 w-5 text-tealglow" />
            </span>
            <span className="text-sm font-semibold tracking-[0.28em] text-white">AGENTWATCH</span>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-muted transition hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <a href="#cta" className="button-primary hidden sm:inline-flex">
            Start Local Demo
          </a>
        </div>
      </nav>

      <section className="section-space relative">
        <div className="container-shell grid items-start gap-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="pt-4">
            <span className="eyebrow">Runtime Observability For Autonomous Software</span>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
              The Control Plane for AI Agents
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Understand how autonomous agents reason, act, and interact with your systems in real time.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              AI agents create dynamic execution paths across models, tools, APIs, and data. Traditional
              observability tools cannot explain these behaviors. AGENTWATCH integrates with OpenClaw and
              other agent runtimes to visualize and model how agents actually operate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#platform" className="button-primary">
                View Live Agent System
              </a>
              <a href="#openclaw" className="button-secondary">
                See OpenClaw Integration
              </a>
            </div>
            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {[
                ["Runtime graph", "Live topology across agents, models, tools, APIs, and systems."],
                ["Execution tracing", "Replay dynamic reasoning and multi-step tool workflows."],
                ["Governance", "Understand cost, access, and anomalies across agent fleets."]
              ].map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <HeroGraph />
        </div>
      </section>

      <section className="section-space" id="platform">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Problem"
            title="Autonomous software creates invisible systems"
            copy="Traditional infrastructure follows predictable request paths. Agent systems compose prompts, model calls, tools, APIs, and handoffs dynamically at runtime, which makes the execution graph change every run."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="panel p-6 sm:p-8">
              <div className="grid gap-5 lg:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted">Traditional Infrastructure</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    {["Request", "Service", "Database"].map((item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="rounded-full border border-white/10 bg-black/30 px-4 py-3 text-sm text-white">
                          {item}
                        </div>
                        {index < 2 ? <ArrowRight className="h-4 w-4 text-muted" /> : null}
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm leading-7 text-muted">
                    Deterministic and well understood. Existing monitoring assumes this shape.
                  </p>
                </div>
                <div className="rounded-[28px] border border-blueglow/20 bg-blueglow/[0.07] p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-blue-100">Agent Systems</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Prompt", "Model", "Tool", "API", "Agent", "Tool", "Model"].map((item, index) => (
                      <div
                        key={`${item}-${index}`}
                        className="rounded-full border border-white/10 bg-black/30 px-3 py-2 text-sm text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm leading-7 text-muted">
                    Paths branch, loop, and change dynamically based on model output and tool results.
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-[28px] border border-white/10 bg-black/25 p-5">
                <p className="text-sm font-semibold text-white">Why this breaks traditional observability</p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Traditional observability tools monitor deterministic infrastructure. AI agents introduce dynamic
                  execution graphs and non-deterministic decision paths. This platform makes those behaviors
                  observable.
                </p>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {problemCards.map((problem) => (
                <div key={problem} className="panel panel-hover p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                    <CircleAlert className="h-5 w-5 text-blueglow" />
                  </div>
                  <p className="mt-6 text-lg font-semibold text-white">{problem}</p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Runtime context is fragmented across prompts, models, tools, and APIs unless it is captured
                    as one execution graph.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Product"
            title="Visualize agent behavior"
            copy="The platform builds a live execution map of autonomous software so platform teams can inspect what happened, why it happened, what it cost, and which systems were involved."
          />
          <div className="mt-12 grid gap-5 xl:grid-cols-2">
            {featureCards.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="panel panel-hover p-6">
                  <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                        <Icon className="h-5 w-5 text-blueglow" />
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold text-white">{feature.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-muted">{feature.copy}</p>
                    </div>
                    <FeatureScreenshot title={feature.title} accent={feature.accent} lines={feature.lines} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space" id="openclaw">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <SectionHeader
              eyebrow="OpenClaw Integration"
              title="Built for OpenClaw agents"
              copy="OpenClaw provides powerful autonomous agents capable of reasoning, tool use, and multi-agent coordination. AGENTWATCH acts as the control plane above those systems, capturing reasoning steps, tool execution, and runtime interactions."
            />
            <div className="mt-8 space-y-4">
              {[
                "OpenClaw agents emit runtime events",
                "Events are streamed into the control plane",
                "The system builds a real-time graph of agent behavior"
              ].map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blueglow/30 bg-blueglow/10 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <p className="pt-2 text-sm leading-7 text-muted">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <ArchitectureDiagram />
        </div>
      </section>

      <section className="section-space" id="governance">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Governance"
              title="Understand and govern autonomous systems"
              copy="The control plane is not just for visibility. It gives teams a way to detect abnormal behavior, monitor tool access, audit actions, and identify risky execution paths before they become incidents."
            />
            <div className="mt-8 grid gap-4">
              {[
                "Detect abnormal agent behavior",
                "Monitor tool access and API usage",
                "Audit agent actions",
                "Identify risky execution paths"
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="panel p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Runtime Governance Console</p>
                <p className="mt-1 text-sm text-muted">Signals surfaced from live execution paths and policy context.</p>
              </div>
              <div className="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1 text-xs font-medium text-red-200">
                3 anomalies
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {governanceAlerts.map((alert) => (
                <div key={alert.title} className="rounded-[24px] border border-white/10 bg-black/25 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className={`signal-pill signal-pill-${alert.tone}`} />
                      <p className="text-sm font-semibold text-white">{alert.title}</p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted">Alert</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted">{alert.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space" id="developers">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeader
              eyebrow="Developers"
              title="Designed for agent engineers"
              copy="Instrument local agents, stream runtime events, and feed the control plane with the data needed to understand autonomous systems in production."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {developerFeatures.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-semibold text-white">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="panel overflow-hidden p-0">
            <div className="border-b border-white/10 px-6 py-5">
              <p className="text-sm font-semibold text-white">Example event stream</p>
              <p className="mt-1 text-sm text-muted">These runtime events power the control plane.</p>
            </div>
            <div className="grid gap-6 p-6 lg:grid-cols-[1fr_0.85fr]">
              <div className="rounded-[28px] border border-white/10 bg-black/25 p-5 font-mono text-sm leading-7 text-muted">
                <p>{`{`}</p>
                <p className="pl-4">{`agent: "ResearchAgent",`}</p>
                <p className="pl-4">{`event: "tool_call",`}</p>
                <p className="pl-4">{`tool: "browser.search",`}</p>
                <p className="pl-4">{`latency: 480,`}</p>
                <p className="pl-4">{`tokens: 1320`}</p>
                <p>{`}`}</p>
              </div>
              <div className="space-y-4">
                {[
                  ["event.ingest", "112k events / min"],
                  ["runtime.sdk", "OpenClaw + custom frameworks"],
                  ["trace.rebuild", "Execution graph updated in 1.2s"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">{label}</p>
                    <p className="mt-3 text-lg font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space" id="vision">
        <div className="container-shell">
          <div className="panel grid gap-8 overflow-hidden p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
            <div>
              <span className="eyebrow">Vision</span>
              <h2 className="section-title max-w-3xl text-balance">
                The operating system for autonomous software
              </h2>
              <p className="section-copy max-w-2xl">
                As companies deploy thousands of AI agents across departments, they will need a control plane to
                understand and manage them. Just as cloud infrastructure required observability platforms,
                autonomous software requires a new layer of runtime visibility.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Agent behavior", "Why a run branched, retried, or escalated."],
                ["Agent cost", "Where tokens and tool usage accumulate."],
                ["Agent permissions", "Which systems and APIs each workflow can reach."],
                ["Agent interactions", "How agents coordinate across tools and models."]
              ].map(([title, copy]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space" id="cta">
        <div className="container-shell">
          <div className="panel relative overflow-hidden px-8 py-12 sm:px-10 sm:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(79,107,255,0.18),transparent_32%),radial-gradient(circle_at_20%_100%,rgba(45,212,191,0.12),transparent_24%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="eyebrow">Closing CTA</span>
                <h2 className="section-title text-balance">See your agents in action</h2>
                <p className="section-copy max-w-2xl">
                  Connect your OpenClaw runtime and watch your agent system come alive.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#" className="button-primary">
                  Start Local Demo
                </a>
                <a href="#openclaw" className="button-secondary">
                  View Architecture
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="container-shell flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Sparkles className="h-5 w-5 text-tealglow" />
              </span>
              <span className="text-sm font-semibold tracking-[0.28em] text-white">AGENTWATCH</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">
              Runtime control plane and observability for OpenClaw and modern AI agent systems.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerColumns).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <div className="mt-4 space-y-3">
                  {links.map((link) => (
                    <a key={link} href="#" className="block text-sm text-muted transition hover:text-white">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container-shell mt-10 border-t border-white/10 pt-6 text-sm text-muted">
          Copyright 2026 AGENTWATCH. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
