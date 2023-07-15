import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Progress,
} from "@chakra-ui/react";
import React from "react";

const FAQ = () => {
  return (
    <section className="faqs-section">
      <div className="faq">
        <div>
          <h1 className="faq_text">FREQUENTLY ASKED QUESTIONS?</h1>
        </div>
        <div>
          <Accordion
            defaultIndex={[0]}
            allowMultiple
            // width={"415px"}
            size={"lg"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <AccordionItem>
              <h2>
                <AccordionButton
                  backgroundColor={"#662D91"}
                  color={"#fff"}
                  _hover={{ backgroundColor: "#662D91" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    How to fix a problem
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                1. Be calm <br />
                2. Understand the source of the problem <br />
                3. Think outside the box <br />
                4. Be a team player <br />
                5. Appreciate everyone.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  backgroundColor={"#662D91"}
                  color={"#fff"}
                  _hover={{ backgroundColor: "#662D91" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    How to manage your website?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}></AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  backgroundColor={"#662D91"}
                  color={"#fff"}
                  _hover={{ backgroundColor: "#662D91" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    How to grow your investment funds?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}></AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  backgroundColor={"#662D91"}
                  color={"#fff"}
                  _hover={{ backgroundColor: "#662D91" }}
                >
                  <Box as="span" flex="1" textAlign="left">
                    What are those requirements for business
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}></AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="experience_section">
        <div>
          <h1 className="ex_text">WE ARE VERY EXPERIENCED & PROFESSIONAL</h1>
        </div>
        <div className="experiences">
          <div className="inside_experience">
            <div className="inside_header">
              <p>Creative Designs</p>
              <span>95%</span>
            </div>
            <Progress
              colorScheme="purple"
              size="lg"
              value={95}
              borderRadius={"5px"}
              backgroundColor={"#C7CAD3"}
            />
          </div>
          <div className="inside_experience">
            <div className="inside_header">
              <p>Product Engineering</p>
              <span>85%</span>
            </div>
            <Progress
              colorScheme="purple"
              //   size="lg"
              width={"100%"}
              height={"18px"}
              value={85}
              borderRadius={"5px"}
              backgroundColor={"#C7CAD3"}
            />
          </div>
          <div className="inside_experience">
            <div className="inside_header">
              <p>Marketing Strategy</p>
              <span>95%</span>
            </div>
            <Progress
              colorScheme="purple"
              size="lg"
              value={95}
              borderRadius={"5px"}
              backgroundColor={"#C7CAD3"}
            />
          </div>
          <div className="inside_experience">
            <div className="inside_header">
              <p>Support Tips</p>
              <span>90%</span>
            </div>
            <Progress
              colorScheme="purple"
              size="lg"
              value={90}
              borderRadius={"5px"}
              backgroundColor={"#C7CAD3"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
