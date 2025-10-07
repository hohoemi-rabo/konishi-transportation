import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * スクロールアニメーション用のカスタムフック
 * @param once - アニメーションを一度だけ実行するか（デフォルト: true）
 * @param amount - 要素がどれだけビューポートに入ったらアニメーションを開始するか（0-1、デフォルト: 0.3）
 * @returns ref と isInView
 */
export function useScrollAnimation(once: boolean = true, amount: number = 0.3) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return { ref, isInView };
}

/**
 * 複数の要素に対してスクロールアニメーションを設定
 * @param count - 要素の数
 * @param once - アニメーションを一度だけ実行するか
 * @param amount - 要素がどれだけビューポートに入ったらアニメーションを開始するか
 */
export function useMultipleScrollAnimations(count: number, once: boolean = true, amount: number = 0.3) {
  const refs = Array.from({ length: count }, () => useRef(null));
  const isInViews = refs.map((ref) => useInView(ref, { once, amount }));

  return { refs, isInViews };
}
