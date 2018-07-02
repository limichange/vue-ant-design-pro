export function formatResponse (res) {
  return {
    total: res.total,
    current: res.current,
    pageSize: res.size
  }
}
