const routeBuilder = (route, filterObject) => {
  let result = `${route}?limit=${filterObject.limit ? filterObject.limit : 10}`;
  if (filterObject.page) {
    result += `&page=${filterObject.page}`;
  }
  if (filterObject.offset) {
    result += `&offset=${filterObject.offset}`;
  }
  return result;
}

export default routeBuilder;
