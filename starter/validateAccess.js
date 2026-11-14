// Checkpoint 2, EASY: The Broken API.
// Plain JavaScript for the Google Apps Script V8 runtime: no require/import, no Node or browser APIs.
// Submit this whole file on the checkpoint 2 page of the console.
// Rules and precedence: Escape_the_Google_Cloud_Participant_Guide.pdf, EASY checkpoint 02.

function validateAccess(input) {
  // TODO: return {"authorized": <boolean>, "reason": "<OK|INVALID_INPUT|INACTIVE|REVOKED|LOW_CLEARANCE|REGION_MISMATCH>"}
  return { authorized: false, reason: 'INVALID_INPUT' };
}
