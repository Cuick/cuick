if !exists(":DiffOrig")
	command DiffOrig vert new | set bt=nofile | r ++edit # | 0d_ | diffthis | wincmd p | diffthis
endif

set t_Co=256
set mouse=a
set expandtab
set nocompatible
set rtp+=~/.vim/bundle/Vundle.vim

call vundle#begin()
Plugin 'gmarik/Vundle.vim'
Plugin 'kien/ctrlp.vim'
Plugin 'scrooloose/nerdtree'
Plugin 'airblade/vim-gitgutter'
Plugin 'Lokaltog/vim-easymotion'
Plugin 'altercation/vim-colors-solarized'
Plugin 'Valloric/YouCompleteMe'
Plugin 'Shougo/vimshell.vim'
Plugin 'scrooloose/syntastic'
Plugin 'Shougo/vimproc.vim'
Plugin 'vim-scripts/indentLine.vim'
Plugin 'terryma/vim-multiple-cursors'
Plugin 'tpope/vim-fugitive'
Plugin 'tpope/vim-git'
Plugin 'mileszs/ack.vim'
Plugin 'mattn/emmet-vim'
Plugin 'tpope/vim-surround'
Plugin 'sjl/badwolf'
Plugin 'gregsexton/gitv'
call vundle#end()
filetype plugin indent on

set list lcs=tab:>-,trail:-

call pathogen#infect()
call pathogen#helptags()


"powerline{
" set guifont=PowerlineSymbols\ for\ Powerline
 "set nocompatible set t_Co=256
"let g:Powerline_symbols = 'fancy'
"}
"
"
let mapleader=" "
nnoremap <leader>jd :YcmCompleter GoTo<CR>

"syntastic{
execute pathogen#infect()
let g:syntastic_python_checkers=['flake8']
let g:ycm_show_diagnostics_ui = 0
"let g:syntastic_aggregate_errors = 1
let g:syntastic_error_symbol = "✗"
let g:syntastic_style_error_symbol = "✗="
let g:syntastic_warning_symbol = "⚠"
let g:syntastic_style_error_symbol = "⚠="
let g:syntastic_auto_jump = 0
"}

set nu
set cindent
set smartindent
set showmatch
set ignorecase smartcase
set nowrapscan
set incsearch
set hlsearch
set magic
set sm
set backspace=indent,eol,start
set cmdheight=1
"imap jk <esc>

set laststatus=2
set autoread
"set foldcolumn=2
"set foldmethod=indent 
"set foldlevel=5

"colorscheme inkpot
"colorscheme molokai
colorscheme badwolf
syntax on

"set guifont=Ubuntu:h12

set sw=4
set tabstop=4
set softtabstop=4

map <silent> <leader>ss :source ~/.vimrc<cr>
map <silent> <leader>ee :e ~/.vimrc<cr>
"map <leader>im :PymodeRopeAutoImport<cr>

map  / <Plug>(easymotion-sn)
omap / <Plug>(easymotion-tn)
"map  n <Plug>(easymotion-next)
"map  N <Plug>(easymotion-prev)
nmap s <Plug>(easymotion-s)

map <Leader>l <Plug>(easymotion-lineforward)
map <Leader>j <Plug>(easymotion-j)
map <Leader>k <Plug>(easymotion-k)
map <Leader>h <Plug>(easymotion-linebackward)
map <Leader>s :vimgrep <c-r><c-w> **/*.py  <cr>
let g:EasyMotion_use_upper = 1
let g:EasyMotion_smartcase = 1
let g:EasyMotion_use_smartsign_us = 1
let g:ycm_global_ycm_extra_conf = '~/.ycm_extra_conf.py'
let g:ycm_autoclose_preview_window_after_completion = 1
let g:ycm_autoclose_preview_window_after_insertion = 1

nmap <c-p><c-p> :CtrlPQuickfix<cr>
nmap <c-o><c-p> :CtrlPMRU<cr>

map <leader>i :NERDTreeToggle <cr>
let NERDTreeIgnore=['.pyc$', '\~$']
"let g:NERDTreeShowBookmarks=1
"let g:NERDTreeQuitOnOpen = 1
"let g:NERDTreeDirArrowExpandable=1
"let g:NERDTreeDirArrowCollapsible=1