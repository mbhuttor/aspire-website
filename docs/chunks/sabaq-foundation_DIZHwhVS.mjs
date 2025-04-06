const SabaqFoundationLogo = new Proxy({"src":"/_astro/sabaq-foundation.DmhYKsyb.png","width":500,"height":496,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/astrowind/src/assets/images/sabaq-foundation.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/astrowind/src/assets/images/sabaq-foundation.png");
							return target[name];
						}
					});

export { SabaqFoundationLogo as default };
