"use client"
import { ProvideTranslations } from "./contexts/translation.context";

export default function Home() {
  return (
    <ProvideTranslations>
      <div>LOGIN</div>
    </ProvideTranslations>
  );
}
