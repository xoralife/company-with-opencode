"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password === "admin123") {
      localStorage.setItem("admin_token", "authenticated");
      router.push("/admin");
    } else {
      setError("Wrong password");
    }
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-sm rounded-[1px] border border-[#303235] p-8" style={{ backgroundColor: "#181a1d" }}>
        <h1 className="font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#00d892]">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full rounded-[1px] border border-[#303235] bg-[#1f2124] px-3 py-2 font-[family-name:var(--font-suisse)] text-[14px] font-[400] text-[#dedede] outline-none transition-colors focus:border-[#00d892]"
          />
          {error && (
            <p className="mt-2 font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#9f3f53]">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-[1px] bg-[#002923] px-4 py-2 font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#00d892] transition-colors hover:bg-[#005441]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
