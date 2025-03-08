
// send email through redirecting to the email app
const RECEIVER = 'usamauk0931307@gmail.com'

export function redirectToEmailApp(subject){
    const mailtoLink = `mailto:${RECEIVER}?subject=${subject}`;
    window.location.href = mailtoLink;
}