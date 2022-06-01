module.exports = async (ctx, next) => {
  // console.log("ctx", ctx);
  await next();
  // console.log("ctx after next", ctx.body.data);
  // only if query param randomSort=true from ctx.request.url
  //parse url
  const queryParams = ctx?.request?.url?.split('?')[1]?.split('&');
  if (!queryParams) {
    return;
  }
  if(queryParams.includes('randomSort=true')){
    ctx.body.data = ctx.body.data.sort(() => Math.random() - 0.5);
  }
}
