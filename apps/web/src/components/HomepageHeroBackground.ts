const font = "13px 'IBM Plex Mono";

export class HomepageHero extends HTMLElement {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private colors: { color: string; probability: number }[] = [];
  public plugins = `neovim coc.nvim NvChad LunarVim telescope.nvim AstroNvim LazyVim kickstart.nvim nvim-lspconfig nvim-treesitter lazy.nvim packer.nvim nvim-cmp deoplete.nvim nvim-tree.lua mason.nvim nvim-lua-guide markdown-preview.nvim vscode-neovim Neovim-from-scratch neorg lualine.nvim tokyonight.nvim nvim-dap trouble.nvim gitsigns.nvim null-ls.nvim which-key.nvim nvim leap.nvim indent-blankline.nvim coq_nvim toggleterm.nvim vim-sneak lspsaga.nvim noice.nvim kanagawa.nvim mini.nvim lsp-zero.nvim Comment.nvim nvim-config bufferline.nvim diffview.nvim ChatGPT.nvim awesome-vim-colorschemes nightfox.nvim nvim-autopairs nvim-notify nvimdots hop.nvim goneovim todo-comments.nvim neo-tree.nvim nvim-surround rust-tools.nvim denite.nvim vim-bootstrap refactoring.nvim nvim-lsp-installer vim-be-good plenary.nvim nvim-colorizer.lua nvim barbar.nvim octo.nvim nvim-treesitter-context github-nvim-theme nvim-dap-ui asyncrun.vim Launch.nvim vim-config symbols-outline.nvim gnvim dashboard-nvim lsp_signature.nvim nvim-ufo lightspeed.nvim nvim-treesitter-textobjects mason-lspconfig.nvim chadtree cellular-automaton.nvim neodev.nvim nvim-web-devicons neovim flash.nvim fidget.nvim fzf-lua oil.nvim go.nvim pynvim nvim-spectre nvim-bqf alpha-nvim nvim-compe gruvbox.nvim dressing.nvim telescope-file-browser.nvim impatient.nvim coc-pyright fvim onedark.nvim lush.nvim defx.nvim nvim-navic nui.nvim coc-explorer aerial.nvim zen-mode.nvim wilder.nvim vim-dirvish nvim-ts-autotag lspkind.nvim obsidian.nvim formatter.nvim instant.nvim nvim-lint nyoom.nvim coc-rust-analyzer learn-neovim-lua awesome-dotfiles nvim-lua-guide-zh neoscroll.nvim hologram.nvim telekasten.nvim feline.nvim glow.nvim project.nvim nvim any-jump.vim coc-tsserver CosmicNvim telescope-fzf-native.nvim semshi completion-nvim awesome-streamerrc vim-javacomplete2 neovim-init.vim doom-nvim conform.nvim twilight.nvim distant.nvim coc-snippets neogen nvim-completion-manager nvim-ts-context-commentstring hydra.nvim Nvim-R rest.nvim true-zen.nvim fzf-preview.vim legendary.nvim ThinkVim nvim-ts-rainbow nvim lazygit.nvim CodeArt galaxyline.nvim material.nvim heirline.nvim venn.nvim vim-vsnip oxocarbon.nvim markdown-preview.vim iron.nvim nvim-neoclip.lua cmp-nvim-lsp neovim-lua spaceduck nvim-jdtls ssr.nvim rnvimr nvim-ide CodeGPT.nvim nvim-oxi nvim git-peek mind.nvim flutter-tools.nvim sidebar.nvim nvim-lightbulb coc-clangd nvim-scrollbar vim-nightfly-colors nord.nvim vim-moonfly-colors magma-nvim git-blame.nvim blamer.nvim FTerm.nvim nvim-remote-containers typescript-tools.nvim dial.nvim none-ls.nvim presence.nvim git-conflict.nvim nvim-hlslens nvim-gdb nvim-dap-virtual-text nvim-typescript overseer.nvim`;
  private imageData!: ImageData[][];
  private mouse: { mouseX: number; mouseY: number } = { mouseX: 0, mouseY: 0 };
  public restart = false;
  private settings: Element[];

  constructor() {
    super();
    this.settings = [...this.children];
  }

  createImageData(input: string, color: string) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    ctx.font = font;
    const size = ctx.measureText(input);
    canvas.width = size.width;
    canvas.height = size.fontBoundingBoxAscent + size.fontBoundingBoxDescent;
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fontKerning = "none";
    ctx.fillText(input, 0, size.fontBoundingBoxAscent);
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
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
    this.imageData = this.plugins
      .trim()
      .split(/\s+/g)
      .map((plugin) =>
        this.colors.map((color) => this.createImageData(plugin, color.color))
      );
    requestAnimationFrame(this.draw.bind(this));
  }

  update() {
    this.imageData.sort(() => Math.random() - 0.5);
  }

  pick(imageData: ImageData[]): ImageData {
    const random = Math.random();
    for (let i = 0; i < imageData.length; i++) {
      if (random <= this.colors[i].probability) {
        return imageData[i];
      }
    }

    return imageData.at(-1)!;
  }

  private nextTick?: ReturnType<typeof setTimeout>;
  draw() {
    const start = performance.now();
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let x = 0;
    let y = 0;

    while (y < this.canvas.height) {
      for (const imageData of this.imageData) {
        const any = imageData.at(-1)!;
        const plugin =
          this.mouse.mouseX < x + any.width &&
          this.mouse.mouseX > x &&
          this.mouse.mouseY < y + any.height &&
          this.mouse.mouseY > y
            ? imageData.at(-1)!
            : this.pick(imageData);

        ctx.putImageData(plugin, x, y);

        x += plugin.width + 10;
        if (x > this.canvas.width) {
          x = 0;
          y += plugin.height + plugin.height * 0.25;
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
