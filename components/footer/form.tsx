"use client";

import { myAction } from "@/app/actions/contact";
import React, { useActionState } from "react";
import Image from "next/image";
import Send from "../../public/ICON/send.svg";

export default function NewsletterForm() {
  const [state, formAction, ispending] = useActionState(myAction, {
    success: false,
    error: {},
  });
  return (
    <form action={formAction} className="relative">
      <input
        type="email"
        name="Email"
        id="Email"
        placeholder="Your email address"
        required
        className="text-Regularbody3 bg-white/20 pl-[0.75rem] pr-10 pt-[0.5625rem] pb-[0.6875rem] rounded-lg w-full focus:outline focus:outline-primary "
      />
      {state.error?.Email && (
        <p className="text-red-400 text-Regularbody3">
          {state.error.Email?.join(", ")}
        </p>
      )}
      <button
        type="submit"
        disabled={ispending || state.success}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
      >
        {ispending ? (
          <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin block"></span>
        ) : state.success ? (
          <span className="text-primary w-5 h-5">✓</span>
        ) : (
          <Image src={Send} alt="Submit email" className="w-5 h-5" />
        )}
      </button>
    </form>
  );
}
