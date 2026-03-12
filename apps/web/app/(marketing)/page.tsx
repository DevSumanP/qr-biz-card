import { textStyle, colorStyle, spacingStyle, componentStyle } from '@/lib/styles'
import { SITE_NAME, SITE_TAGLINE } from '@/lib/constants'
import QuoteRequestForm from '@/components/forms/QuoteRequestForm'

export default function HomePage() {
  return (
    <main>
      {/* Assemble sections as you build them: */}
      {/* <HeroSection />         */}
      {/* <HowItWorksSection />   */}
      {/* <FeaturesSection />     */}
      {/* <PricingSection />      */}
      {/* <TestimonialsSection /> */}
      {/* <FAQSection />          */}
      {/* <CTASection />          */}

      {/* Dev placeholder */}
      <section className={`min-h-[80vh] flex items-center justify-center ${colorStyle.bgWhite}`}>
        <div className="text-center max-w-lg px-8">
          <h1 className={`${textStyle.heading1} ${colorStyle.textPrimary}`}>{SITE_NAME}</h1>
          <p className={`${textStyle.bodyMedium}  ${colorStyle.textSubtle} mt-4`}>{SITE_TAGLINE}</p>
          <div className={`${spacingStyle.row} justify-center mt-8 flex-wrap`}>
            <a href="#quote" className={componentStyle.btnPrimary}>Get a Quote →</a>
            <a href="/b/demo" className={componentStyle.btnOutline}>See live example</a>
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section id="quote" className={`py-24 px-6 ${colorStyle.bgSurface}`}>
        <div className="max-w-4xl mx-auto">
          <QuoteRequestForm />
        </div>
      </section>
    </main>
  )
}
