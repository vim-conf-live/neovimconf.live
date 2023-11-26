import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import defaultTheme from "tailwindcss/defaultTheme";

const baseUrl = `https://neovimconf.live/`;

export const AgendaTimingAnnouncementEmail = () => (
  <Tailwind
    config={{
      theme: {
        extend: {
          fontFamily: {
            sans: [
              '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
              ...defaultTheme.fontFamily.sans,
            ],
          },
        },
      },
    }}
  >
    <Html>
      <Head />
      <Preview>The NeoVim Conf 2023 agenda and timing is here!</Preview>
      <Body className="bg-gray-50">
        <Container className="bg-white mx-auto py-6 mb-16">
          <Section className="px-8">
            <Img
              src={`${baseUrl}/og_image.png`}
              width="1200"
              height="630"
              alt="NeoVim Conf"
              className="w-full h-auto"
            />
            <Hr style={hr} />
            <Text style={paragraph}>
              The NeoVim Conf 2023 agenda and timing is here!
            </Text>
            <Button
              className="inline-block relative text-center bg-teal-300 visited:text-black font-white font-bold p-2 rounded-sm"
              href="https://neovimconf.live/"
            >
              View the agenda
            </Button>
            <Hr style={hr} />
            <Text style={paragraph}>
              We're excited to announce the agenda and timing for NeoVim Conf,
              2023!
            </Text>
            <Text style={paragraph}>
              Please add it to your calendar and tell your friends! We're
              excited for all of the speakers and hope you are too.
            </Text>
            <Text style={paragraph}>— The NeoVim Conf team</Text>
            <Hr style={hr} />
            <Text style={footer}>NeoVim Conf, 2023</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default AgendaTimingAnnouncementEmail;

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
