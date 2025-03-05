import React from "react";
import { useNavigate } from "react-router-dom";
import landinglogo from "../../assets/icons/landinglogo.svg";
import landingicon from "../../assets/icons/landingicon.svg";
import landingscroll from "../../assets/icons/landingscroll.svg";
import landingData from "./LandingData";
import { motion } from "framer-motion";
import {
  Content,
  Icon,
  LandingContainer,
  Logoimg,
  Mockup,
  Mockupimg,
  Scroll,
  Scrollimg,
  ScrollText,
  Section,
  SectionBaroTitle,
  SectionContainer,
  SectionContent,
  SectionmainTitle,
  SectionsubTitle,
  SectionTitle,
  StartButton,
  Subtitle,
} from "./Landing.styles";

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <LandingContainer>
      <Content>
        <Subtitle>약속 정할 때 언제 어디로?</Subtitle>
        <Logoimg src={landinglogo} alt="logo" />
        <Icon>
          <Logoimg src={landingicon} alt="logo" />
        </Icon>
        <Scroll>
          <Scrollimg src={landingscroll} alt="scroll" />
          <ScrollText>스크롤해보세요</ScrollText>
        </Scroll>
      </Content>

      <StartButton onClick={() => navigate("/login")}>시작하기</StartButton>

      {landingData.map((section, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideUpVariants}
        >
          <Section key={index}>
            <SectionContainer>
              <SectionContent>
                {index === 1 ? (
                  <>
                    <Mockup>
                      {Array.isArray(section.img) ? (
                        section.img.map((src, idx) => (
                          <Mockupimg key={idx} src={src} alt="mockup" />
                        ))
                      ) : (
                        <Mockupimg src={section.img} alt="mockup" />
                      )}
                    </Mockup>

                    <SectionBaroTitle>{section.title}</SectionBaroTitle>
                  </>
                ) : index === 0 || index === 7 ? (
                  <>
                    {Array.isArray(section.title) ? (
                      section.title.map((text, idx) => (
                        <SectionTitle key={idx}>{text}</SectionTitle>
                      ))
                    ) : (
                      <SectionTitle>{section.title}</SectionTitle>
                    )}

                    <Mockup>
                      {Array.isArray(section.img) ? (
                        section.img.map((src, idx) => (
                          <Mockupimg key={idx} src={src} alt="mockup" />
                        ))
                      ) : (
                        <Mockupimg src={section.img} alt="mockup" />
                      )}
                    </Mockup>
                  </>
                ) : (
                  // 여기만 고치면 landing끝끝
                  <>
                    {Array.isArray(section.title) ? (
                      section.title.map((text, idx) =>
                        idx === 0 ? (
                          <SectionmainTitle key={idx}>{text}</SectionmainTitle>
                        ) : (
                          <SectionsubTitle key={idx}>{text}</SectionsubTitle>
                        )
                      )
                    ) : (
                      <SectionmainTitle>{section.title}</SectionmainTitle>
                    )}
                    <Mockup>
                      {Array.isArray(section.img) ? (
                        section.img.map((src, idx) => (
                          <Mockupimg key={idx} src={src} alt="mockup" />
                        ))
                      ) : (
                        <Mockupimg src={section.img} alt="mockup" />
                      )}
                    </Mockup>
                  </>
                )}
              </SectionContent>
            </SectionContainer>
          </Section>
        </motion.div>
      ))}
    </LandingContainer>
  );
};

export default Landing;
