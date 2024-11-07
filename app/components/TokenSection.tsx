"use client";

import Image from "next/image";
import { FC } from "react";

interface TokenSectionType {
  sectionHeader: string;
  tokens: string[];
}

const TokenSection: FC<TokenSectionType> = ({ tokens, sectionHeader }) => {
  const tokenSplit = (tokens.length - 1) / 2;
  const upperTokenList = [...tokens].slice(0, tokenSplit);
  const lowerTokenList = [...tokens].slice(tokenSplit, tokens.length - 1);
  return (
    <section className="bg-light">
      <div>
        <div className="row align-items-center justify-content-center justify-content-lg-between">
          <div>
            <h2
              className="display-4 lh-1 mb-4 text-center"
              id="section-heading-1"
            >
              {sectionHeader}
            </h2>
            <div className="token-container">
              <div id="token-list-1" className="tokens">
                {upperTokenList.map((token) => (
                  <Image
                    alt={"token"}
                    src={token}
                    width={70}
                    height={70}
                    className="token"
                  />
                ))}
              </div>
              <div id="token-list-2" className="tokens tokens-below">
                {lowerTokenList.map((token) => (
                  <Image
                    alt={"token"}
                    src={token}
                    width={70}
                    height={70}
                    className="token"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
