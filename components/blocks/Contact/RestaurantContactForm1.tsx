"use client";

import React from "react";
import { useNode, Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Button } from "../Basic/Button";
import { Input } from "../Basic/Input";

interface RestaurantContactForm1Props {
  title?: string;
  subtitle?: string;
  formAction?: string;
  buttonText?: string;
  backgroundImage?: string;
}

export function RestaurantContactForm1(props: RestaurantContactForm1Props = {}) {
  const {
    title = "How we can help your food?",
    subtitle = "Write here",
    formAction = "email-templates/contact-form.php",
    buttonText = "Send a message",
    backgroundImage = "https://placehold.co/210x171"
  } = props;
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <Element id="restaurant-contact-form" is={Section} canvas>
      <Box padding="py-16 px-4">
        <Box width="100%" margin="mx-auto">
          <Box display="flex" flexDirection="column" gap="gap-8" alignItems="center">
            {/* Subtitle */}
            <Element id="contact-form-subtitle" is={Text}>
              <Text
                text={subtitle}
                tagName="span"
                fontSize="text-6xl md:text-8xl"
                fontWeight="font-bold"
                color="text-gray-200"
                textAlign="center"
              />
            </Element>

            {/* Contact Form */}
            <Element id="contact-form-container" is={Box}>
              <Box
                backgroundColor="bg-gray-50"
                padding="p-8"
                borderRadius="rounded-lg"
              >
                <Element id="contact-form-title" is={Text}>
                  <Text
                    text={title}
                    tagName="h2"
                    fontSize="text-2xl"
                    fontWeight="font-bold"
                    color="text-gray-800"
                    margin="mb-6"
                  />
                </Element>

                <form action={formAction} method="post">
                  {/* Name Input */}
                  <Element id="contact-form-name" is={Input}>
                    <Input
                      type="text"
                      placeholder="Your name*"
                      margin="mb-4"
                    />
                  </Element>

                  {/* Email Input */}
                  <Element id="contact-form-email" is={Input}>
                    <Input
                      type="email"
                      placeholder="Your email address*"
                      margin="mb-4"
                    />
                  </Element>

                  {/* Message Textarea */}
                  <Element id="contact-form-message" is={Input}>
                    <Input
                      type="text"
                      placeholder="Your message"
                      margin="mb-6"
                    />
                  </Element>

                  {/* Submit Button */}
                  <Element id="contact-form-submit" is={Button}>
                    <Button
                      text={buttonText}
                      variant="default"
                    />
                  </Element>

                  <input type="hidden" name="redirect" value="" />
                </form>
              </Box>
            </Element>
          </Box>
        </Box>
      </Box>
    </Element>
  );
};

RestaurantContactForm1.craft = {
  displayName: "Restaurant Contact Form 1",
  props: {
    title: "How we can help your food?",
    subtitle: "Write here",
    formAction: "email-templates/contact-form.php",
    buttonText: "Send a message"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
