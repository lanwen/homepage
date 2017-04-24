export function handleOutgoingLink(e, link) {
  e.preventDefault()
  if (e.metaKey) {
    window.open(link)
  } else {
    window.location.href = link
  }
}
