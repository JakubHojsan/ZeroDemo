import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Em, Box, Image, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Text margin="0px 0 24px 0" text-align="center" font="--headline2" md-font="--headline3">
				Zero: Rental Concept
			</Text>
			<Menu
				display="flex"
				justify-content="center"
				font="--base"
				font-weight="700"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px" />
			</Menu>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-align-items="center"
				lg-margin="0px 0px 80px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				lg-width="100%"
				md-margin="0px 0px 50px 0px"
				sm-margin="0px 0px 30px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					<Em>
						Zero
					</Em>
					{" "}carbon emissions. Infinite fun.
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL1" font="--lead" lg-text-align="center">
					Zero is a sustainable electric motorcycle platform whose goal it is to make commuting carbon neutral. The motivation laid in the fact that current sustainable city activism is all talk, with no real solutions being proposed/call to actions given. By allowing a fun activity to be combined with sustainable activism, we can ensure that there is a reason for those that don't drive sustainable to do so with Zero.
					<br />
					<br />
					<Link href="https://github.com/JakubHojsan/DH110-22F/edit/main/A08/draft/README.md#design-statement" />
				</Text>
			</Box>
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-align-items="center"
				lg-margin="0px 0px 80px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				lg-width="100%"
				md-margin="0px 0px 50px 0px"
				sm-margin="0px 0px 30px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/63800622f913c500201f21c0/images/pro.png?v=2022-11-25T00:53:58.685Z"
					display="block"
					bottom="auto"
					height="500px"
					left="auto"
					position="static"
					right="268px"
					top="459px"
					width="600px"
					align-self="auto"
				/>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" flex-wrap="wrap" />
			<Box width="100%" margin="0px 0px 64px 0px" md-margin="0px 0px 30px 0px">
				<Text
					margin="0px 0px 0px 0px"
					color="--dark"
					font="--headline2"
					width="45%"
					lg-width="100%"
					lg-text-align="center"
				>
					Competitive Analysis
				</Text>
			</Box>
			<Box display="flex" width="100%" md-flex-wrap="wrap">
				<Box
					width="48%"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					md-width="100%"
					padding="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					md-margin="0px 0px 40px 0px"
					margin="0px 3% 0px 0px"
				>
					<Text margin="0px 0px 0px 0px" padding="0px 0px 3% 0px" font="30px inter">
						<Strong>
							Heuristics
						</Strong>
						{" "}
					</Text>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="40% 0px 0px 0px"
						border-radius="24px"
						md-margin="0px 0px 20px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/63800622f913c500201f21c0/images/hr1.png?v=2022-11-25T01:11:23.439Z"
							width="100%"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							max-height="100%"
						/>
					</Box>
					<Text
						margin="0px 0px 0px 0px"
						color="--darkL2"
						font="--base"
						md-text-align="center"
						padding="3% 0px 3% 0px"
					>
						In order to begin brainstorming the project, I conducted a heuristic analysis on a few websites in the sustainable city space. While not direct competition with Zero, the goal of the assessment was to find design aspects in the space that poorly impacted message using design heuristics. It naturally led me to look at competitors like Bird, Lyft Scooters, and Turo in the space. To learn more, click{" "}
						<Link href="https://github.com/JakubHojsan/DH110-22F/tree/main/A01" target="_self">
							here
						</Link>
						.
					</Text>
				</Box>
				<Box
					width="48%"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					md-width="100%"
					padding="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					md-margin="0px 0px 40px 0px"
					margin="0px 3% 0px 0px"
				>
					<Text margin="0px 0px 0px 0px" padding="0px 0px 3% 0px" font="30px inter">
						<Strong>
							Competitor Usability Testing
						</Strong>
					</Text>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="40% 0px 0px 0px"
						border-radius="24px"
						md-margin="0px 0px 20px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/63800622f913c500201f21c0/images/Screen%20Shot%202022-11-24%20at%205.14.55%20PM.png?v=2022-11-25T01:15:17.482Z"
							width="100%"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							max-height="100%"
						/>
					</Box>
					<Text
						margin="0px 0px 0px 0px"
						color="--darkL2"
						font="--base"
						md-text-align="center"
						padding="3% 0px 3% 0px"
					>
						Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam sapien convallis eu. Nulla ut turpis in diam dapibus consequat.
					</Text>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"63800622f913c500201f21be"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});