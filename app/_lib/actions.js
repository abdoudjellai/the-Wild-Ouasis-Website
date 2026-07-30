"use server";

import { signIn,signOut   } from "@/app/_lib/auth";

export async function updateProfile(formData) {

}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
