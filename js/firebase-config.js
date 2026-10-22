// PREVIEW SITE ONLY - points to the spruce-meadows-preview Firebase project (test data).
// Spruce Meadows HOA - Firebase settings
//
// These values identify our Firebase project. They are NOT secret:
// Firebase is designed for them to appear in public web pages.
// Security comes from Firebase Authentication and the Firestore rules.
//
// NEVER put a password in this file (or anywhere in the website code).

export const firebaseConfig = {
  apiKey:            "AIzaSyABuVucEybCTFL2kZgv7bJpVo1iM7mdLMM",
  authDomain:        "spruce-meadows-preview.firebaseapp.com",
  projectId:         "spruce-meadows-preview",
  storageBucket:     "spruce-meadows-preview.firebasestorage.app",
  messagingSenderId: "362767230208",
  appId:             "1:362767230208:web:1323e724e0d804754bbfe5"
};

// The single shared board login. Board members only type the password;
// this email is filled in automatically. Password resets are sent here.
export const BOARD_EMAIL = "lea2170102@maricopa.edu";
