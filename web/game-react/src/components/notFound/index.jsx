import React from "react";
import {colors} from "../../Helpers/UI/constants";
import {PageWrapper} from "../common/PageWrapper";
import {SectionHeader} from "../../Helpers/UI";

export default function NotFound() {

    return (
        <PageWrapper backgroundColor={colors.charcoal}>
            <SectionHeader>Page Not Found</SectionHeader>
        </PageWrapper>
    )
}