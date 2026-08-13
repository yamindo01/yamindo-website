"use client";

import { useState, useEffect } from "react";

export interface BankAccountInfo {
  accountNo: string;
  accountName: string;
  en_accountName: string;
  bankName: string;
  en_bankName: string;
  logo?: string;
}

export function useBankAccounts() {
  const [bankAccounts, setBankAccounts] = useState<BankAccountInfo[]>([]);

  useEffect(() => {
    fetch("/api/bank-accounts")
      .then((r) => (r.ok ? r.json() : []))
      .then(setBankAccounts)
      .catch(() => {});
  }, []);

  return bankAccounts;
}
