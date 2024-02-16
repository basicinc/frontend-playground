# frontend-playground

フロントエンドの遊び場

## Stacks

- React
- TypeScript
- Vite
- css modules
- Storybook

## 準備

開始する前に、以下がインストールされていることを確認してください:

- Node.js (20系)
- pnpm (8系)

## 始め方

```shell
pnpm install
pnpm dev
```

## アイコンを増やす手順

- アイコンの原本データをFigmaからsvg形式でexportし、`src/assets/icons`に配置する
- `pnpm icons`を実行、`src/components/ui/Icon/generated`配下にreact componentが生成される
- Icon componentに、name定義を追加する
