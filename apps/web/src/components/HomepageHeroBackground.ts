const FONT = "13px 'IBM Plex Mono";
const LINE_HEIGHT = 1.25;

export class HomepageHero extends HTMLElement {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private colors: { color: string; probability: number }[] = [];
  public plugins = `neovim coc.nvim NvChad LunarVim telescope.nvim AstroNvim LazyVim kickstart.nvim nvim-lspconfig nvim-treesitter lazy.nvim packer.nvim nvim-cmp deoplete.nvim nvim-tree.lua mason.nvim nvim-lua-guide markdown-preview.nvim vscode-neovim Neovim-from-scratch neorg lualine.nvim tokyonight.nvim nvim-dap trouble.nvim gitsigns.nvim null-ls.nvim which-key.nvim nvim leap.nvim indent-blankline.nvim coq_nvim toggleterm.nvim vim-sneak lspsaga.nvim noice.nvim kanagawa.nvim mini.nvim lsp-zero.nvim Comment.nvim nvim-config bufferline.nvim diffview.nvim ChatGPT.nvim awesome-vim-colorschemes nightfox.nvim nvim-autopairs nvim-notify nvimdots hop.nvim goneovim todo-comments.nvim neo-tree.nvim nvim-surround rust-tools.nvim denite.nvim vim-bootstrap refactoring.nvim nvim-lsp-installer vim-be-good plenary.nvim nvim-colorizer.lua nvim barbar.nvim octo.nvim nvim-treesitter-context github-nvim-theme nvim-dap-ui asyncrun.vim Launch.nvim vim-config symbols-outline.nvim gnvim dashboard-nvim lsp_signature.nvim nvim-ufo lightspeed.nvim nvim-treesitter-textobjects mason-lspconfig.nvim chadtree cellular-automaton.nvim neodev.nvim nvim-web-devicons neovim flash.nvim fidget.nvim fzf-lua oil.nvim go.nvim pynvim nvim-spectre nvim-bqf alpha-nvim nvim-compe gruvbox.nvim dressing.nvim telescope-file-browser.nvim impatient.nvim coc-pyright fvim onedark.nvim lush.nvim defx.nvim nvim-navic nui.nvim coc-explorer aerial.nvim zen-mode.nvim wilder.nvim vim-dirvish nvim-ts-autotag lspkind.nvim obsidian.nvim formatter.nvim instant.nvim nvim-lint nyoom.nvim coc-rust-analyzer learn-neovim-lua awesome-dotfiles nvim-lua-guide-zh neoscroll.nvim hologram.nvim telekasten.nvim feline.nvim glow.nvim project.nvim nvim any-jump.vim coc-tsserver CosmicNvim telescope-fzf-native.nvim semshi completion-nvim awesome-streamerrc vim-javacomplete2 neovim-init.vim doom-nvim conform.nvim twilight.nvim distant.nvim coc-snippets neogen nvim-completion-manager nvim-ts-context-commentstring hydra.nvim Nvim-R rest.nvim true-zen.nvim fzf-preview.vim legendary.nvim ThinkVim nvim-ts-rainbow nvim lazygit.nvim CodeArt galaxyline.nvim material.nvim heirline.nvim venn.nvim vim-vsnip oxocarbon.nvim markdown-preview.vim iron.nvim nvim-neoclip.lua cmp-nvim-lsp neovim-lua spaceduck nvim-jdtls ssr.nvim rnvimr nvim-ide CodeGPT.nvim nvim-oxi nvim git-peek mind.nvim flutter-tools.nvim sidebar.nvim nvim-lightbulb coc-clangd nvim-scrollbar vim-nightfly-colors nord.nvim vim-moonfly-colors magma-nvim git-blame.nvim blamer.nvim FTerm.nvim nvim-remote-containers typescript-tools.nvim dial.nvim none-ls.nvim presence.nvim git-conflict.nvim nvim-hlslens nvim-gdb nvim-dap-virtual-text nvim-typescript overseer.nvim`.split(" ")
  private mouse: { mouseX: number; mouseY: number } = { mouseX: 0, mouseY: 0 };
  public restart = false;
  private settings: Element[];

  constructor() {
    super();
    this.settings = [...this.children];
  }

  setup() {
    this.canvas?.remove();
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d")!;
    this.canvas.width = this.clientWidth;
    this.canvas.height = this.clientHeight;
    this.colors = [];
    for (const value of this.settings) {
      const { color } = getComputedStyle(value);
      this.colors.push({
        color,
        probability: Number(value.getAttribute("data-probability")) || 1,
      });
    }
    this.appendChild(this.canvas);

    requestAnimationFrame(this.draw.bind(this));
  }

  update() {
    this.plugins.sort(() => Math.random() - 0.5);
  }

  randomColor(): string {
    const random = Math.random();
    for (const { color, probability } of this.colors) {
      if (random <= probability) {
        return color
      }
    }

    return this.colors.at(-1)!.color
  }

  private nextTick?: ReturnType<typeof setTimeout>;
  draw() {
    const start = performance.now();
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let x = 0;
    let y = 0;

    ctx.font = FONT;
    ctx.fontKerning = "auto";

    while (y < this.canvas.height) {
      for (const plugin of this.plugins) {
        ctx.save()

        const size = ctx.measureText(plugin);
        const width = size.width;
        const height = (size.fontBoundingBoxAscent + size.fontBoundingBoxDescent) * 1.25;

        const mouseOver = this.mouse.mouseX < x + width &&
          this.mouse.mouseX > x &&
          this.mouse.mouseY < y + height/2  &&
          this.mouse.mouseY > y - height/2;

        ctx.fillStyle = mouseOver ? this.colors.at(-1)!.color : this.randomColor()
        ctx.fillText(plugin, x, y);

        ctx.restore()

        x += width + 10;
        if (x > this.canvas.width) {
          x = 0;
          y += height;
        }

        if (y > this.canvas.height) {
          break;
        }
      }
    }

    this.update();

    const end = performance.now();
    this.nextTick = setTimeout(
      () => requestAnimationFrame(this.draw.bind(this)),
      Math.max(0, 1000 / 20 - (end - start))
    );
  }

  connectedCallback() {
    window.addEventListener("load", () => this.setup());

    document.addEventListener("mousemove", ({ clientX, clientY }) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse = {
        mouseX: clientX - rect.left,
        mouseY: clientY - rect.top,
      };
    });

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", () => {
      clearInterval(this.nextTick);
      setTimeout(() => {
        requestAnimationFrame(this.setup.bind(this));
      }, 16);
    });
  }
}

customElements.define("homepage-hero", HomepageHero);
