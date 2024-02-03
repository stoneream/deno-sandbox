# deno-sandbox

denoで遊んで見るテスト

## Windows環境へのインストール

- [Deno Runtime Quick Start | Deno Docs](https://docs.deno.com/runtime/manual)

```
irm https://deno.land/install.ps1 | iex
```

## 作業環境関係

- [Deno - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
  - プラグインを追加して設定ファイルにformatとlintを有効化

```json
  "deno": {
    "enable": true,
    "lint": true
  },
```

## getting started

- [Command Line Interface | Deno Docs](https://docs.deno.com/runtime/manual/getting_started/command_line_interface)

```powershell
deno run -A .\hello.ts
# Hello, TypeScript
```

## `run` の `-A` オプション is....

```powershell
deno run
# ....
#   -A, --allow-all
#           Allow all permissions. Learn more about permissions in Deno:
#           https://deno.land/manual@v1.40.3/basics/permissions
```
