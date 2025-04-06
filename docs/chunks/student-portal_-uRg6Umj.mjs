const StudentPortalLogo = new Proxy({"src":"/_astro/student-portal.CVGm__kD.png","width":260,"height":246,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/astrowind/src/assets/images/student-portal.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/astrowind/src/assets/images/student-portal.png");
							return target[name];
						}
					});

export { StudentPortalLogo as default };
