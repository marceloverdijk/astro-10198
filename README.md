# Astro 10198

This is an example repo for Astro issue: https://github.com/withastro/astro/issues/10198


See `src/layouts/Layout.astro`:

```
	<body>
		<slot />

		<!-- This would make 'aos' available globally -->
		<!-- But unfortunately we cannot resolve/include such a script from node_modules -->
		<!-- <script is:inline src="/vendor/aos/aos.js"></script> -->

		<!-- This is the suggested approach, but it will not make 'aos' available globally, so does not work -->
		<script>
			import "aos/dist/aos.js";
		</script>

		<!-- This is an example script (provided via 3th party template, which assumes/needs 'aos' to available globally)  -->
		<script is:inline src="/js/external-theme.js"></script>

	</body>
```

