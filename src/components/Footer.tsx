import { Row, IconButton, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", link: social.github, icon: <Github size={18} /> },
    { name: "LinkedIn", link: social.linkedin, icon: <Linkedin size={18} /> },
    { name: "Twitter", link: social.twitter, icon: <Twitter size={18} /> },
  ];

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>

        <Row gap="16">
          {socialLinks.map(
            (item) =>
              item.link && (
                <Link
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton tooltip={item.name} size="s" variant="ghost">
                    {item.icon} {/* ✅ Render icon as child instead of prop */}
                  </IconButton>
                </Link>
              )
          )}
        </Row>
      </Row>

      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
