import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
}




// phone formatting function for Indian numbers — inspired by your reference ✨
export const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  // remove non-numeric characters
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  // less than or equal to 5 digits → no space
  if (phoneNumberLength <= 5) return phoneNumber;

  // 6–10 digits → 98765 43210
  return `${phoneNumber.slice(0, 5)} ${phoneNumber.slice(5, 10)}`;
};
