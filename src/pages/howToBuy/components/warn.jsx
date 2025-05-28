import React from "react";

export const Warn = () => {
    return (
        <div className="lg:mt-16 mt-8 px-4 warn">
            <div className="flex items-start">
                <div>
                    <i className="lg:w-[22px] w-[18px] lg:h-[22px] h-[18px] flex-center mt-1 mr-3">
                        <img src="media/icons/warn.png" alt="warn" />
                    </i>
                </div>
                <p className="text-white">Use only the official UAX website or trusted platforms listed here. Avoid suspicious ads, DMs, or links. Buy tokens via reputable wallets like MetaMask. Never trust third-party "early access" claims—check our site for presale info.</p>
            </div>
        </div>
    )
}