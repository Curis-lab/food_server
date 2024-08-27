export default interface HTTPRequest<Params, Headers, Body, Query> {
  params?: Params;
  header?: Headers;
  body?: Body;
  query?: Query;
}
