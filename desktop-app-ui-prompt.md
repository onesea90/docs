# SIYA Desktop Application UI - Comprehensive Design Prompt

## Ultra-Detailed Prompt for SIYA Desktop Application Interface

```
Create a highly detailed, photorealistic mockup of the SIYA Desktop Application interface for macOS. The design should be a perfect blend of Apple's Human Interface Guidelines and modern AI application aesthetics. The interface should feel premium, professional, and cutting-edge.

OVERALL SPECIFICATIONS:
- Resolution: 2880x1800px (Retina display)
- Style: Native macOS Big Sur/Ventura design language
- Color scheme: Light mode with subtle gradients and shadows
- Window: Standard macOS window with traffic lights (red, yellow, green)

TOP BAR SECTION (Full width, 60px height):
Create a sophisticated top navigation bar with frosted glass effect (background blur):

Left section (aligned left, 20px padding):
- Hamburger menu button (☰): 24x24px, subtle hover effect
- Separator line (1px, #E0E0E0)

Center section (evenly spaced):
- "📊 App Insights" button: Modern analytics icon, badge showing "12" in red
- "📁 Workspaces" button: Folder icon with dropdown arrow
- "📂 Folder" button: Open folder icon with recent path tooltip
- "🤖 AI Tasks" button: Robot icon with animated pulse (3 active)
- "📋 Casefiles" button: Clipboard icon with checkmark

Each button should have:
- Rounded rectangle background on hover (#F5F5F5)
- 8px horizontal padding, 6px vertical padding
- 14px SF Pro Display Medium font
- Subtle drop shadow on active state

MAIN CHAT AREA (Center, with elegant shadows):
Background: Pure white (#FFFFFF) with subtle inner shadow

Messages area (scrollable):
- Clean message bubbles with 16px padding
- User messages: Right-aligned, blue gradient (#007AFF to #0051D5)
- AI messages: Left-aligned, light gray (#F2F3F5)
- Typing indicator: Three animated dots
- Code blocks: Syntax highlighted with copy button
- Images: Rounded corners with lightbox preview

CHAT INPUT SECTION (Bottom, 120px height):
Create a sophisticated multi-line input area with glass morphism effect:

Top control bar (40px height, horizontal layout):
Left side controls:
1. "📎" Attach file button:
   - Paperclip icon with "+" badge
   - Tooltip: "Attach files (⌘+U)"
   - Drag & drop zone indicator

2. "🔌" MCP Servers dropdown:
   - Electric plug icon with green dot (connected)
   - Dropdown shows: "Context7 ✓", "Stock Market ✓", "Custom..."
   - Quick toggle switches

3. Mode selector (segmented control):
   - "💬 Chat" (selected, blue background)
   - "📋 Task" (unselected)
   - Smooth slide animation between modes

Right side controls:
4. "🧠" Model selector dropdown:
   - Brain icon with model name
   - Current: "Claude Opus 4"
   - Dropdown menu shows:
     * Claude Sonnet 4 ⚡ (Fast)
     * Claude Opus 4 🎯 (Powerful) ✓
     * Gemini 2.5 Pro 🌟 (Versatile)
     * GPT-5 🚀 (Latest)
     * --- Local Models ---
     * Llama 3 🦙
     * Mistral 🌊
     * Custom endpoint...

5. "🎤" Voice input button:
   - Microphone icon with sound wave animation when active
   - Push-to-talk indicator
   - Real-time transcription preview

Input field area (60px height):
- Multi-line text input with placeholder: "Ask anything... (⌘+Enter to send)"
- Expandable up to 200px
- Character count indicator (bottom right)
- Auto-complete suggestions
- Markdown formatting toolbar (appears on text selection)

Send button area (right side):
- Large circular send button "➤" (40x40px)
- Blue gradient when text present
- Loading spinner during processing
- Cancel option when sending

SIDEBAR (Left, 280px width, collapsible):
Translucent background with vibrancy effect
Sections:
- Recent Chats (with search)
- Projects (with folders)
- Quick Actions
- Settings gear icon (bottom)

STATUS BAR (Bottom, 24px height):
Glass effect background showing:
- Connection status: "● Connected"
- Memory usage: "Memory: 2.1GB / 8GB"
- Token count: "Tokens: 15,234"
- Model temperature: "Temp: 0.7"
- Sync status: "↻ Synced"

VISUAL EFFECTS & POLISH:
1. Shadows:
   - Window: 0 20px 40px rgba(0,0,0,0.1)
   - Buttons: 0 2px 4px rgba(0,0,0,0.05)
   - Input area: 0 -2px 10px rgba(0,0,0,0.05)

2. Animations:
   - Smooth transitions (0.2s ease)
   - Micro-interactions on all buttons
   - Gentle pulse on voice recording
   - Slide animations for mode switch

3. Typography:
   - SF Pro Display for UI elements
   - SF Mono for code
   - Dynamic type support

4. Accessibility:
   - High contrast borders on focus
   - Clear hover states
   - Keyboard navigation indicators
   - Screen reader labels

5. Native macOS Features:
   - Traffic light integration
   - Translucency effects
   - Vibrancy in appropriate areas
   - Native context menus
   - Smooth scrolling with bounce

The overall feeling should be premium, responsive, and delightful to use. Every interaction should feel purposeful and refined. The interface should clearly communicate that this is a powerful AI assistant that respects macOS design principles while pushing the boundaries of what's possible.

Include subtle AI-themed decorative elements:
- Faint neural network pattern in empty states
- Gradient mesh in background
- Particle effects during processing
- Smooth morphing transitions

The final design should make users feel they're using the future of AI assistants, seamlessly integrated into their Mac experience.
```

## Additional Specifications for Designers

### Color Palette
```css
--primary-blue: #007AFF;
--primary-gradient: linear-gradient(135deg, #007AFF 0%, #0051D5 100%);
--hover-gray: #F5F5F5;
--border-gray: #E0E0E0;
--text-primary: #1D1D1F;
--text-secondary: #86868B;
--background-frosted: rgba(255, 255, 255, 0.72);
--shadow-subtle: 0 2px 4px rgba(0, 0, 0, 0.05);
--shadow-medium: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-large: 0 20px 40px rgba(0, 0, 0, 0.1);
```

### Component Dimensions
```
Top Bar: 1440x60px
Sidebar: 280x900px (collapsible to 60px)
Chat Area: 880x900px
Input Section: 880x120px
Status Bar: 1440x24px
Window Chrome: 32px (macOS standard)
```

### Interaction States
1. **Default**: Base appearance
2. **Hover**: Subtle background change + cursor pointer
3. **Active**: Pressed state with slight scale (0.98)
4. **Focus**: Blue outline for accessibility
5. **Disabled**: 50% opacity
6. **Loading**: Skeleton screens or spinners

### Export Requirements
- Format: PNG at 2x resolution
- Alternative: Figma/Sketch file with components
- Include: Light and Dark mode variants
- Provide: Component library for consistency

This prompt will generate a stunning, professional SIYA Desktop Application interface that perfectly captures the sophisticated, AI-powered experience while maintaining native macOS design excellence.