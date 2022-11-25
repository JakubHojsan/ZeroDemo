import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Em, Box, Image, Strong, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
import * as Components from "components";
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
			<Box display="flex" width="100%" md-flex-wrap="wrap" height="600px">
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
						height="50%"
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
						min-height="200px"
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
						height="50%"
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
						min-height="200px"
					>
						After evaluation heuristics, I found the space I was looking at wouldn't be incredibly intellectually stimulating to iterate on, and I wanted to solve something really posing a problem to users. I took a look at more sites like{" "}
						<Link
							href="https://www.bird.co/"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							Bird
						</Link>
						{" "}and{" "}
						<Link
							href="https://www.lyft.com/scooters"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							Lyft
						</Link>
						. This allowed me to find more gaps in competitors solution spaces, which can be found here at my{" "}
						<Link
							href="https://github.com/JakubHojsan/DH110-22F/tree/main/A02"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							user testing
						</Link>
						. The answers found in my surveys sparked the idea for Zero, but I had to be sure.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" flex-wrap="wrap" />
			<Box width="100%" margin="0px 0px 64px 0px" md-margin="0px 0px 30px 0px" min-width="auto">
				<Text
					margin="0px 0px 0px 0px"
					color="--dark"
					font="--headline2"
					width="75%"
					lg-width="100%"
					lg-text-align="center"
				>
					User Research and Storytelling
				</Text>
			</Box>
			<Box display="flex" width="100%" md-flex-wrap="wrap" height="600px">
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
							Contextual Inquiry
						</Strong>
					</Text>
					<Box
						width="100%"
						height="50%"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="40% 0px 0px 0px"
						border-radius="24px"
						md-margin="0px 0px 20px 0px"
					>
						<Image
							src="https://images.unsplash.com/photo-1565300480288-deb407e6ae15?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000"
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
						min-height="200px"
					>
						I needed to do some user research through{" "}
						<Link href="https://github.com/JakubHojsan/DH110-22F/tree/main/A03">
							contextual inquiry
						</Link>
						{" "}in order to pinpoint a solution space I wanted to work in through passive observation and interviews with users. What can we do to move gas traffic to EV or other types of sustainable traffic? Bird seemed to make shorter commutes easier, but what about longer ones like my participant's trips to Culver City or Beverly Hills? Are buses and carpooling the only option, or are there other possibilities?
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
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							UI/UX Storytelling
						</Strong>
					</Text>
					<Box
						width="100%"
						height="50%"
						overflow-x="hidden"
						overflow-y="visible"
						position="relative"
						padding="40% 0px 0px 0px"
						border-radius="24px"
						md-margin="0px 0px 20px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/63800622f913c500201f21c0/images/1jr.png?v=2022-11-25T01:41:34.832Z"
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
						min-height="200px"
					>
						My favorite part about user experience is the creation of unique{" "}
						<Link
							href="https://github.com/JakubHojsan/DH110-22F/tree/main/A04"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							personas
						</Link>
						{" "}that would use the product. Here I created two personas with unique user journeys that roadmap how they would use Zero. The user journey was a fun way to get to know the product better, and how I could better solve a problem for our end user.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 20px 0">
				Demo it.
			</Text>
			<Components.EmbedHTML />
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
				The prototype was a great way to get a feel for what we could pass off to a development team or create in house.
			</Text>
			<Button font="--lead" margin="20px" background="#5c1cc9" href="https://www.figma.com/proto/E0lVkbu4lQ9bkhfn0V9jZc/Zero?page-id=42%3A1736&node-id=42%3A2158&viewport=207%2C435%2C0.22&scaling=scale-down&starting-point-node-id=42%3A1823">
				Access the full demo here.
			</Button>
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