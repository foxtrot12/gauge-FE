"use client";

import { memo } from "react";
import HeaderComponent from "../components/header.component";
import { ProvideTranslations } from "../contexts/translation.context";
import TestComponent from "./common/test.component";

function Assessment() {
  return (
    <ProvideTranslations>
      <HeaderComponent />
      <TestComponent />
    </ProvideTranslations>
  );
}

export default memo(Assessment);
