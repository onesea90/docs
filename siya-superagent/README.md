# Siya Documentation

Welcome to Siya, an advanced AI system featuring adaptive dual-mode architecture with support for the latest AI models including GPT-5, Claude Opus 4, Gemini 2.5 Pro, and powerful local options like Qwen and DeepSeek.

## 🚀 What is Siya?

Siya is a sophisticated AI assistant that adapts its architecture based on how you prefer to work:

- **Chat Mode**: Interactive assistance with direct tool access and spawnable sub-agents
- **Task Mode**: Autonomous orchestration of specialized agent modules for complex projects
- **Latest AI Models**: GPT-5, Claude Opus 4, Gemini 2.5 Pro, and more
- **Local Models**: Qwen, DeepSeek, Llama 3, and other privacy-first options
- **Extensible**: Add capabilities with MCP servers and automate with hooks

## 📱 Available Platforms

### macOS Desktop App
✅ **Available Now** - Native macOS application with full feature support

### Coming Soon
- 🔜 **API Access** - RESTful API for integration into your applications
- 🔜 **CLI Tool** - Command-line interface for developers
- 🔜 **Windows & Linux** - Desktop apps for all platforms
- 🔜 **iOS & Android** - Mobile applications

## 📚 Documentation Overview

### Getting Started
- **[Introduction to Siya](./introduction.mdx)** - Understand Siya's dual-mode architecture
- **[Quick Start Guide](./quick-start.mdx)** - Get up and running in minutes
- **[Desktop Application](./desktop-application.mdx)** - Complete guide for the macOS app
- **[Model Selection](./model-selection.mdx)** - Choose from latest AI models (GPT-5, Claude 4, Gemini 2.5)

### Core Concepts
- **[Execution Modes](./execution-modes.mdx)** - Deep dive into Chat vs Task modes
- **[Agent System](./agent-system.mdx)** - Learn about Siya's adaptive agent architecture
- **[Tools & Capabilities](./tools-capabilities.mdx)** - What Siya can do for you

### Architecture
- **[Planning System](./planning-system.mdx)** - How Siya plans and executes complex tasks
- **[Memory System](./memory-system.mdx)** - Auto-compacting and context preservation
- **[Configuration](./configuration.mdx)** - Customize Siya for your needs

### Extensions & Automation
- **[MCP Integration](./mcp-integration.mdx)** - Extend Siya with Model Context Protocol servers
- **[Hooks Automation](./hooks-automation.mdx)** - Automate workflows with custom hooks
- **[Advanced Topics](./advanced-topics.mdx)** - Power user features and techniques

### Coming Soon
- **[API Reference](./api-reference.mdx)** - REST API documentation

## 🎯 Quick Navigation

### I want to...
- **Get started quickly** → [Quick Start Guide](./quick-start.mdx)
- **Download the app** → [Desktop Application](./desktop-application.mdx)
- **Use the latest AI** → [GPT-5, Claude Opus 4, Gemini 2.5 Pro](./model-selection.mdx)
- **Run models locally** → [Qwen, DeepSeek, Llama Setup](./model-selection.mdx#local-models-with-llamafile)
- **Understand the modes** → [Execution Modes](./execution-modes.mdx)
- **Add integrations** → [MCP Integration](./mcp-integration.mdx)
- **Automate workflows** → [Hooks Automation](./hooks-automation.mdx)

## 🌟 Key Features

### Latest AI Models

**Cutting-Edge Cloud Models**
- **Anthropic**: Claude Opus 4, Sonnet 4, and Haiku
- **OpenAI**: GPT-5, GPT-4 Turbo, GPT-3.5
- **Google**: Gemini 2.5 Pro, Gemini Pro
- **Others**: Mixtral, Command R+, custom endpoints

**Powerful Local Models**
- **Qwen**: Alibaba's multilingual powerhouse
- **DeepSeek**: Specialized for code and reasoning
- **Llama 3**: Meta's open models (7B to 70B)
- **Mistral**: Fast and efficient
- **Phi-3**: Compact yet capable
- **CodeLlama**: Programming specialist

### Dual-Mode Architecture

**Chat Mode**
- Interactive conversation
- Direct tool access
- Spawnable sub-agents (SWE, Search, Browser, Automation)
- Auto-compacting memory
- Real-time responses

**Task Mode**
- Autonomous orchestration
- Dedicated agent modules
- Comprehensive planning
- SWE module with exclusive MCP access
- Hands-off execution

### Core Capabilities

**Software Engineering**
- Code generation with DeepSeek or CodeLlama
- Architecture design with Claude Opus 4
- Debugging with GPT-5
- Test creation and documentation

**Data Analysis**
- Statistical analysis
- Visualization creation
- Report generation with Gemini 2.5 Pro
- Pattern recognition with Qwen

**Web Operations**
- Browser automation
- Data extraction
- Research compilation
- API integration

**Automation**
- Workflow creation
- Scheduled tasks
- Process automation
- System integration

### Extensibility & Automation

**MCP Integration**
- Connect to databases
- Integrate with APIs
- Access enterprise systems
- Create custom tools
- [Learn more →](./12-mcp-integration.mdx)

**Hooks System**
- Automate on events
- Custom notifications
- Workflow triggers
- External integrations
- [Learn more →](./13-hooks-system.mdx)

## 🔧 How Siya Works

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        SIYA SYSTEM                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    │
│  │   LATEST    │    │    MODE     │    │ EXTENSIONS  │    │
│  │   MODELS    │    │  SELECTION  │    │             │    │
│  ├─────────────┤    ├─────────────┤    ├─────────────┤    │
│  │• GPT-5      │    │• Chat Mode  │    │• MCP Servers│    │
│  │• Claude 4   │    │• Task Mode  │    │• Hooks      │    │
│  │• Gemini 2.5 │    │             │    │• Plugins    │    │
│  │• Qwen       │    │             │    │             │    │
│  │• DeepSeek   │    │             │    │             │    │
│  └─────────────┘    └─────────────┘    └─────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Workflow

1. **Choose Your Model** - Latest cloud or powerful local options
2. **Pick Your Mode** - Chat for interaction, Task for automation
3. **Extend as Needed** - Add MCP servers and hooks
4. **Work Your Way** - Siya adapts to your preferences

## 💡 Best Practices

### Model Selection
- **Complex Tasks** → Claude Opus 4 or GPT-5
- **Code Generation** → DeepSeek or CodeLlama
- **Multilingual** → Qwen models
- **Research** → Gemini 2.5 Pro
- **Privacy/Offline** → Local models
- **Cost-Conscious** → Local or lighter models

### Mode Selection
- **Exploration** → Chat Mode
- **Production** → Task Mode
- **Learning** → Chat Mode
- **Automation** → Task Mode

### Extension Strategy
- **Start Simple** → Basic features first
- **Add MCP** → When you need integrations
- **Configure Hooks** → For automation needs
- **Use Local Models** → For privacy/cost

## 🆘 Getting Help

- Check our documentation
- Visit our [Support Center](https://siya.com/support)
- Contact dev@siya.com

## 📊 System Requirements

### macOS Desktop App
- macOS 11.0 (Big Sur) or later
- 8GB RAM (16GB recommended)
- 2GB available storage
- Internet connection (optional with local models)

### For Local Models
- **7B Models** (Mistral, Qwen-7B): 8GB RAM
- **13B Models** (Llama 3-13B, DeepSeek): 16GB RAM
- **30B+ Models**: 32GB RAM
- **70B Models** (Llama 3-70B, Qwen-72B): 64GB+ RAM
- Apple Silicon recommended for best performance

---

*Start your journey with Siya today - Experience the latest AI models with the flexibility to run anywhere!*