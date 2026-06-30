//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-B1M7aTFd.js
var manifest = { "d7c58d83ea5d9fb6ea14bbee48208b480c0f3465375db0b0b9290487c4b7f00a": {
	functionName: "sendEnquiry_createServerFn_handler",
	importer: () => import("./_ssr/send-enquiry-DWGUclpT.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
