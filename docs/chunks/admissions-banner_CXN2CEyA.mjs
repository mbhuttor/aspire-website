const admissionsBanner = new Proxy({"src":"/_astro/admissions-banner.DNj8CvTk.png","width":600,"height":614,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/astrowind/src/assets/images/admissions-banner.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/workspaces/astrowind/src/assets/images/admissions-banner.png");
							return target[name];
						}
					});

export { admissionsBanner as default };
