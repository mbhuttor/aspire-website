const heroImage = new Proxy({"src":"/_astro/hero-image.Hwyu5O2B.png","width":1710,"height":1132,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/astrowind/src/assets/images/hero-image.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/astrowind/src/assets/images/hero-image.png");
							return target[name];
						}
					});

export { heroImage as default };
