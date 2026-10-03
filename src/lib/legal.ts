/**
 * Finalized legal documents as structured data (Step 13). Kept as data — not
 * hand-written markup — so the Privacy Policy and Terms render identically on the
 * web landing page and (a copy of this file) in the mobile app, from one source
 * of truth. Update the copy here and in frontend-mobile-app/src/lib/legal.ts
 * together when the text changes.
 */

/** A run of text, optionally bold. */
export type Span = string | { b: string };

export type Block =
  | { h: string } // section heading
  | { p: Span[] } // paragraph
  | { ul: Span[][] } // bullet list (each item is a span array)
  | { table: { head: string[]; rows: string[][] } }
  | { hr: true };

export interface LegalDoc {
  title: string;
  updated: string;
  blocks: Block[];
}

const EMAIL = "hello@vournal.app";

export const PRIVACY_POLICY: LegalDoc = {
  title: "Privacy Policy",
  updated: "3 October 2026",
  blocks: [
    { p: ["This policy explains what vournal collects, how it is used, and who else processes it."] },
    {
      p: [
        'vournal ("we", "us") is operated by Mohamad El Naboulsi, based in Tripoli, Lebanon. Contact: ',
        { b: EMAIL },
        ".",
      ],
    },
    {
      p: [
        "Please read section 3 carefully — it explains that your voice recordings and journal text are sent to third-party providers, including AI services, in order to transcribe and organise them. The app asks for your permission before it sends anything to them.",
      ],
    },
    { hr: true },

    { h: "1. The short version" },
    {
      ul: [
        ["You speak; we record, transcribe, and organise what you said."],
        ["To do that, your audio and transcripts are sent to specialist providers, including AI services (listed in section 3). They process it on our behalf."],
        ["The app asks for your permission before it first sends a recording or entry to those providers. You can withdraw it at any time in Profile."],
        ["If you choose to link a person in your journal to a contact on your phone, that contact is read on your device only. Your contacts are never uploaded."],
        ["We do ", { b: "not" }, " sell your data, use it for advertising, or read your journals except in the narrow cases described in section 6."],
        ["You can delete any recording, any entry, or your entire account at any time."],
      ],
    },

    { h: "2. What we collect" },
    { p: [{ b: "Account information" }] },
    {
      ul: [
        ["Email address"],
        ["A password, stored only as a cryptographic hash — we never store or see your actual password"],
        ['Your time zone (so times you speak, like "2pm tomorrow", land on the right hour)'],
      ],
    },
    { p: [{ b: "Content you create" }] },
    {
      ul: [
        ["Audio recordings you make in the app"],
        ["The text transcript of those recordings"],
        ["Information automatically derived from your entries, including: a short summary, an estimated mood rating and mood-related words, tasks and their dates and times, recurring topics, places, and names of people you mention"],
      ],
    },
    { p: [{ b: "Technical information" }] },
    {
      ul: [["Basic operational logs needed to run and secure the service (for example, request timestamps and error records)"]],
    },
    { p: [{ b: "Contacts on your device (optional)" }] },
    { p: ["You can link a person in your journal to a contact on your phone. If you choose to, the app asks for access to your contacts and reads the name, phone numbers, and email addresses of the contact you pick, so it can show them to you."] },
    {
      ul: [
        ["This happens on your device. Your contacts are ", { b: "not" }, " uploaded to our servers and are not sent to any third party."],
        ["The link between a person and a contact is stored only on your device. It is removed when you unlink the contact or delete your account."],
        ["Access is optional. The rest of the app works without it, and you can turn it off at any time in your device settings."],
      ],
    },
    { p: [{ b: "Calendar and Reminders on your device (optional)" }] },
    { p: ["You can ask vournal to copy the tasks and appointments it extracts into Apple Reminders and Apple Calendar. If you turn this on, the app asks for access, creates a list and a calendar named \"vournal\", and keeps the copies up to date as you tick or delete tasks in the app."] },
    {
      ul: [
        ["This happens on your device. Nothing from your calendars or reminders is read into vournal or uploaded to our servers."],
        ["You can turn it off at any time in Profile, and remove everything vournal added with one tap."],
      ],
    },
    { p: ["We do not collect your location or advertising identifiers, we do not store your contacts, calendars, or reminders on our servers, and we do not use your device's microphone outside of recordings you explicitly start."] },

    { h: "3. Third parties who process your data" },
    { p: ["To turn speech into organised text, we send your data to the following providers. They act as processors on our behalf and are contractually limited to providing their service to us."] },
    {
      table: {
        head: ["Provider", "What is sent", "Purpose"],
        rows: [
          ["Speechmatics (Melia)", "Your audio recording", "Converting speech to text"],
          ["Anthropic (Claude)", "Your transcript text", "Correcting transcription errors and extracting tasks, mood, topics, places, and people"],
          ["Render (backend + PostgreSQL database)", "Account data, transcripts, and everything derived from your entries", "Hosting and database storage"],
          ["Cloudflare (R2 storage)", "Your audio recordings", "Storing audio files in a private bucket"],
          ["Resend (email delivery)", "Your email address and the message we send you", "Sending password-reset emails"],
        ],
      },
    },
    { p: [{ b: "This means your voice recordings and journal text leave your device." }, " They are transmitted over encrypted connections and processed to produce your transcript and its structure."] },
    { p: ["We select providers that do not use customer data submitted through their APIs to train their models. Provider terms can change; the list above reflects our current providers and we will update it when it changes."] },
    { p: [{ b: "Your permission." }, " Speechmatics and Anthropic are AI services. Before the app first sends them a recording or an entry, it shows you who receives what and asks for your permission. Nothing is sent to them unless you allow it. You can withdraw your permission at any time in Profile. The app then stops sending new recordings and entries, and you will not be able to create new entries until you allow it again. Entries already in your journal are not affected."] },

    { h: "4. Sensitive content" },
    { p: ["A voice journal is unusually personal, and two categories deserve specific mention:"] },
    { p: [{ b: "Mood and emotional information." }, " The app estimates a mood rating and emotion words from what you say, and shows trends over time. This is generated to give you a reflection of your own entries. ", { b: "It is not a clinical assessment, not a diagnosis, and not a medical record." }] },
    { p: [{ b: "Other people." }, " Your entries may mention friends, family, or colleagues, and the app may store their names as part of your entry. Please be thoughtful about what you record about others."] },

    { h: "5. Why we process your data (legal bases)" },
    { p: ["Where required by law (for example under the GDPR), we rely on:"] },
    {
      ul: [
        [{ b: "Performance of a contract" }, " — to provide the service you signed up for"],
        [{ b: "Legitimate interests" }, " — to keep the service secure, prevent abuse, and fix faults"],
        [{ b: "Consent" }, " — where you have given it, such as the permission to send your content to the AI providers in section 3 and the permission to read a contact you choose to link. You may withdraw either at any time"],
        [{ b: "Legal obligation" }, " — where we are required to retain or disclose information"],
      ],
    },

    { h: "6. Who can see your journals" },
    { p: ["Your entries are private to your account. We do not read them for advertising, profiling, or sale. Our staff do not routinely access journal content. Limited access may occur only where strictly necessary to:"] },
    {
      ul: [
        ["investigate a technical fault you have reported to us"],
        ["respond to a credible security incident"],
        ["comply with a valid legal obligation"],
      ],
    },

    { h: "7. Retention and deletion" },
    {
      ul: [
        [{ b: "Delete a recording" }, " — removes the audio file while keeping the written entry."],
        [{ b: "Delete an entry" }, " — removes the entry, its recording, and the tasks derived from it."],
        [{ b: "Delete your account" }, " — removes your account and associated content."],
        [{ b: "Withdraw AI permission" }, " — in Profile. Stops new recordings and entries being sent to the AI providers. It does not delete entries you already have."],
        [{ b: "Unlink a contact" }, " — removes the link from your device. Your contact itself is never changed."],
      ],
    },
    { p: ["Deletions are actioned promptly. Copies may persist briefly in encrypted backups before being overwritten in the ordinary course of operations. Transient copies held by processors are deleted according to their retention practices."] },

    { h: "8. Security" },
    {
      ul: [
        ["Data is transmitted over encrypted connections (HTTPS/TLS)"],
        ["Passwords are stored as bcrypt hashes, never in readable form"],
        ["Recordings are held in private storage and served only through short-lived, authenticated links"],
        ["Access to accounts requires an authentication token that expires and can be revoked"],
      ],
    },
    { p: ["No system is perfectly secure, and we cannot guarantee absolute security."] },

    { h: "9. International transfers" },
    { p: ["We operate globally and our providers may process data in countries other than yours, including the United States and the European Union. Where required, we rely on appropriate safeguards for such transfers."] },

    { h: "10. Your rights" },
    { p: ["Depending on where you live, you may have the right to access, correct, delete, export, or restrict processing of your data, to object to processing, and to lodge a complaint with your data-protection authority."] },
    { p: ["If you are a California resident: we do not sell or share your personal information as those terms are defined under California law."] },
    { p: ["Many of these rights can be exercised directly in the app. For anything else, contact ", { b: EMAIL }, " and we will respond within the period required by applicable law."] },

    { h: "11. Children" },
    { p: ["vournal is not intended for children under 16. We do not knowingly collect information from children. If you believe a child has created an account, contact us and we will remove it."] },

    { h: "12. Changes to this policy" },
    { p: ["We may update this policy. If changes are material, we will notify you in the app or by email before they take effect. The date at the top shows the current version."] },

    { h: "13. Contact" },
    { p: ["Questions, requests, or complaints: ", { b: EMAIL }] },
  ],
};

export const TERMS_OF_SERVICE: LegalDoc = {
  title: "Terms of Service",
  updated: "3 October 2026",
  blocks: [
    { p: ['These terms govern your use of vournal, operated by Mohamad El Naboulsi ("we", "us"). By creating an account or using the app, you agree to them. If you do not agree, please do not use vournal.'] },
    { hr: true },

    { h: "1. What vournal is" },
    { p: ["vournal is a voice journal. You speak; the app records you, converts your speech to text, and automatically organises it into a journal entry, tasks, and calendar items, along with an estimated mood and the topics, places, and people that recur. You can optionally link a person in your journal to a contact on your phone, have vournal copy your tasks and appointments into Apple Reminders and Apple Calendar, and share an entry to other apps."] },
    { p: ["How your data is handled is described in our Privacy Policy, which forms part of these terms."] },

    { h: "2. Eligibility" },
    { p: ["You must be at least 16 years old to use vournal. By using it, you confirm that you are."] },

    { h: "3. Your account" },
    { p: ["You are responsible for keeping your login credentials secure and for activity that occurs under your account. Tell us promptly at ", { b: EMAIL }, " if you believe your account has been accessed without your permission."] },

    { h: "4. Your content belongs to you" },
    { p: ["You retain all rights to your recordings, transcripts, and entries. We claim no ownership of them."] },
    { p: ["You grant us a limited licence to store, transmit, and process your content ", { b: "solely to operate the service for you" }, " — including sending it to the providers listed in the Privacy Policy for transcription and organisation. This licence exists only so the app can function, ends when you delete the content or your account, and does not permit us to publish your content, sell it, or use it for advertising."] },

    { h: "5. Accuracy — please read" },
    { p: [{ b: "Automated transcription and organisation are imperfect, and vournal may get things wrong." }] },
    { p: ["Specifically, the app may mishear words, transcribe the wrong thing, assign the wrong date or time to a task, miss a task you mentioned, or create one you did not intend. This is more likely with background noise, accents, dialects, and speech that mixes languages."] },
    { p: [{ b: "Do not rely on vournal as your only record of anything important." }, " It is a journaling aid, not a system of record. You are responsible for verifying anything that matters — appointments, deadlines, medication schedules, commitments to other people. We are not liable for anything missed, mistimed, or misrecorded."] },
    { p: ["If you turn on copying to Apple Reminders or Apple Calendar, the copies reflect what vournal extracted, with the same possibility of error, and they follow changes made in vournal, not the other way round. Check them as you would check vournal itself."] },

    { h: "6. Mood features are not health care" },
    { p: ["vournal estimates a mood rating and emotion words from your entries and shows trends over time. These are automated impressions of your own words, offered for personal reflection."] },
    { p: [{ b: "vournal is not a medical device, and it does not provide medical, psychological, or mental-health advice, diagnosis, or treatment." }, " Nothing it shows you should be treated as a clinical assessment or used to make health decisions."] },
    { p: ["If you are struggling with your mental health, please contact a qualified professional or a local support service. If you are in immediate danger, contact your local emergency number."] },

    { h: "7. Acceptable use" },
    { p: ["You agree not to:"] },
    {
      ul: [
        ["use vournal for anything unlawful, or to record anyone in a way that breaks the law where you are"],
        ["upload content you have no right to record or share"],
        ["attempt to access another user's account or data"],
        ["probe, disrupt, overload, or reverse-engineer the service, or bypass its security or usage limits"],
        ["use automated means to access the service outside of normal app use"],
        ["resell or commercially redistribute the service"],
      ],
    },

    { h: "8. Free and paid access" },
    { p: ["Free accounts may be subject to usage limits, which we may change. If we introduce paid plans, pricing and billing terms will be presented to you before you subscribe, and purchases made through the Apple App Store are additionally governed by Apple's terms, with payment, renewal, and refunds handled by Apple."] },

    { h: "9. Availability and changes" },
    { p: ["We aim to keep vournal running well, but we do not guarantee uninterrupted or error-free service. We may change, suspend, or discontinue features. If we plan to discontinue the service entirely, we will give you reasonable notice and an opportunity to export your data."] },

    { h: "10. Ending your use" },
    { p: ["You may delete your account at any time in the app. We may suspend or terminate accounts that breach these terms, or where required by law. On termination, your content is deleted as described in the Privacy Policy."] },

    { h: "11. Disclaimers" },
    { p: ['To the fullest extent permitted by law, vournal is provided ', { b: '"as is" and "as available"' }, ", without warranties of any kind, whether express or implied, including fitness for a particular purpose, accuracy, or non-infringement."] },

    { h: "12. Limitation of liability" },
    { p: ["To the fullest extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, lost data, or missed obligations arising from your use of vournal."] },
    { p: ["Where liability cannot be excluded, our total liability is limited to the greater of the amount you paid us in the twelve months before the claim, or US$100."] },
    { p: ["Some jurisdictions do not allow certain exclusions, so parts of this section may not apply to you. Nothing here limits liability that cannot lawfully be limited."] },

    { h: "13. Indemnity" },
    { p: ["You agree to indemnify us against claims arising from your misuse of the service or your breach of these terms."] },

    { h: "14. Governing law" },
    { p: ["These terms are governed by the laws of Lebanon, and disputes will be handled by the courts of Lebanon, without affecting mandatory consumer protections available to you where you live."] },

    { h: "15. Changes to these terms" },
    { p: ["We may update these terms. If changes are material, we will notify you in the app or by email before they take effect. Continuing to use vournal after that means you accept the updated terms."] },

    { h: "16. If you got vournal from the Apple App Store" },
    { p: ["These additional terms apply to the iOS app. Where they conflict with anything above, these terms apply."] },
    {
      ul: [
        [{ b: "Who the agreement is with." }, " These terms are between you and us only, not Apple. We, not Apple, are solely responsible for vournal and its content."],
        [{ b: "Your licence." }, " We grant you a non-transferable licence to use vournal on Apple devices that you own or control, as permitted by the Usage Rules in the Apple Media Services Terms and Conditions."],
        [{ b: "Maintenance and support." }, " We are solely responsible for maintaining and supporting vournal. Apple has no obligation to provide any maintenance or support for it."],
        [{ b: "Warranty." }, " To the extent any warranty applies and vournal fails to conform to it, you may notify Apple, and Apple will refund the purchase price, if any, that you paid for the app. To the maximum extent permitted by law, Apple has no other warranty obligation for vournal."],
        [{ b: "Claims." }, " We, not Apple, are responsible for addressing any claims by you or a third party relating to vournal or your use of it, including product-liability claims, claims that vournal fails to meet a legal or regulatory requirement, and claims under consumer-protection, privacy, or similar law."],
        [{ b: "Intellectual property." }, " If a third party claims that vournal or your use of it infringes their intellectual-property rights, we, not Apple, are responsible for investigating, defending, settling, and discharging that claim."],
        [{ b: "Legal compliance." }, " You confirm that you are not located in a country subject to a United States Government embargo or designated by it as a terrorist-supporting country, and that you are not on any United States Government list of prohibited or restricted parties."],
        [{ b: "Third-party terms." }, " You must comply with any third-party terms that apply to you when using vournal, such as your mobile carrier's."],
        [{ b: "Apple as a beneficiary." }, " Apple and its subsidiaries are third-party beneficiaries of these terms. Once you accept them, Apple has the right to enforce these terms against you as a third-party beneficiary."],
      ],
    },

    { h: "17. Contact" },
    { p: ["Mohamad El Naboulsi, Tripoli, Lebanon. ", { b: EMAIL }] },
  ],
};
