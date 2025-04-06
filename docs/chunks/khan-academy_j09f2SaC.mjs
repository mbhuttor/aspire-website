const KhanAcademyLogo = new Proxy({"src":"/_astro/khan-academy.vNmcM-dC.png","width":588,"height":578,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/astrowind/src/assets/images/khan-academy.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/astrowind/src/assets/images/khan-academy.png");
							return target[name];
						}
					});

export { KhanAcademyLogo as default };
