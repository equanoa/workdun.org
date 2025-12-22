import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/ui/navbar";
import { HomeStickyCTA } from "@/components/ui/home-sticky-cta";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IndustryPage from "./pages/IndustryPage";
import ServicePage from "./pages/ServicePage";
import SolutionPage from "./pages/SolutionPage";
import ScaleYourCompany from "./pages/ScaleYourCompany";
import ScaleCarDealership from "./pages/ScaleCarDealership";
import StartEcommerceStartup from "./pages/StartEcommerceStartup";
import StartAIStartup from "./pages/StartAIStartup";
import StartSkincareCompany from "./pages/StartSkincareCompany";
import StartFitnessStartup from "./pages/StartFitnessStartup";
import StartCryptoMiningFarm from "./pages/StartCryptoMiningFarm";
import StartYourATMBusiness from "./pages/StartYourATMBusiness";
import AIMastery from "./pages/AIMastery";
import AIMasteryForLawyers from "./pages/AIMasteryForLawyers";
import WhitelabelEncryptedChatMessenger from "./pages/WhitelabelEncryptedChatMessenger";
import WhitelabelPrivateCloudStorage from "./pages/WhitelabelPrivateCloudStorage";
import Pricing from "./pages/Pricing";
import AffiliateProgram from "./pages/AffiliateProgram";
import ScaleCarDealershipResources from "./pages/ScaleCarDealershipResources";
import ProjectStatus from "./pages/ProjectStatus";
import InformationTechnology from "./pages/InformationTechnology";
import IoTConnectedDevices from "./pages/IoTConnectedDevices";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import EcommercePlatforms from "./pages/EcommercePlatforms";
import SkincareHealth from "./pages/SkincareHealth";
import FitnessHealth from "./pages/FitnessHealth";
import LawyersLawFirms from "./pages/LawyersLawFirms";
import NFTCryptoMining from "./pages/NFTCryptoMining";
import BankingAndFinance from "./pages/BankingAndFinance";
import ProductDesign from "./pages/ProductDesign";
import WebDesignDevelopment from "./pages/WebDesignDevelopment";
import ECommerce from "./pages/ECommerce";
import BrandCreative from "./pages/BrandCreative";
import ContentSocial from "./pages/ContentSocial";
import GrowthPerformance from "./pages/GrowthPerformance";
import StrategicAdvisory from "./pages/StrategicAdvisory";
import TechnologyOperations from "./pages/TechnologyOperations";
import DataAIIoT from "./pages/DataAIIoT";
import EmergingTechnologies from "./pages/EmergingTechnologies";
import ManufacturingSupport from "./pages/ManufacturingSupport";
import SupportTraining from "./pages/SupportTraining";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <HomeStickyCTA />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/industry/information-technology" element={<InformationTechnology />} />
          <Route path="/industry/iot-connected-devices" element={<IoTConnectedDevices />} />
          <Route path="/industry/artificial-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/industry/e-commerce-platforms" element={<EcommercePlatforms />} />
          <Route path="/industry/skincare-health" element={<SkincareHealth />} />
          <Route path="/industry/fitness-health" element={<FitnessHealth />} />
          <Route path="/industry/lawyers-and-law-firms" element={<LawyersLawFirms />} />
          <Route path="/industry/nft-crypto-mining" element={<NFTCryptoMining />} />
          <Route path="/industry/banking-and-finance" element={<BankingAndFinance />} />
          <Route path="/industry/:slug" element={<IndustryPage />} />
          <Route path="/service/product-design" element={<ProductDesign />} />
          <Route path="/service/web-design-development" element={<WebDesignDevelopment />} />
          <Route path="/service/web-design-and-development" element={<WebDesignDevelopment />} />
          <Route path="/service/e-commerce" element={<ECommerce />} />
          <Route path="/service/ecommerce" element={<ECommerce />} />
          <Route path="/service/brand-creative" element={<BrandCreative />} />
          <Route path="/service/content-social" element={<ContentSocial />} />
          <Route path="/service/growth-performance" element={<GrowthPerformance />} />
          <Route path="/service/strategic-advisory" element={<StrategicAdvisory />} />
          <Route path="/service/technology-operations" element={<TechnologyOperations />} />
          <Route path="/service/data-ai-iot" element={<DataAIIoT />} />
          <Route path="/service/emerging-technologies" element={<EmergingTechnologies />} />
          <Route path="/service/manufacturing-support" element={<ManufacturingSupport />} />
          <Route path="/service/support-training" element={<SupportTraining />} />
          <Route path="/service/support-and-training" element={<SupportTraining />} />
          <Route path="/service/:slug" element={<ServicePage />} />
          <Route path="/solution/scale-your-company" element={<ScaleYourCompany />} />
          <Route path="/solution/scale-your-car-dealership" element={<ScaleCarDealership />} />
          <Route path="/solution/start-your-e-commerce-startup" element={<StartEcommerceStartup />} />
          <Route path="/solution/start-your-ai-startup" element={<StartAIStartup />} />
          <Route path="/solution/start-your-skincare-company" element={<StartSkincareCompany />} />
          <Route path="/solution/start-your-fitness-startup" element={<StartFitnessStartup />} />
          <Route path="/solution/start-your-crypto-mining-farm" element={<StartCryptoMiningFarm />} />
          <Route path="/solution/start-your-atm-business" element={<StartYourATMBusiness />} />
          <Route path="/solution/:slug" element={<SolutionPage />} />
          <Route path="/course/ai-mastery" element={<AIMastery />} />
          <Route path="/course/ai-mastery-for-lawyers" element={<AIMasteryForLawyers />} />
          <Route path="/course/:slug" element={<SolutionPage />} />
          <Route path="/whitelabel/whitelabel-your-own-encrypted-chat-messenger" element={<WhitelabelEncryptedChatMessenger />} />
          <Route path="/whitelabel/whitelabel-your-own-private-cloud-storage" element={<WhitelabelPrivateCloudStorage />} />
          <Route path="/whitelabel/:slug" element={<SolutionPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/affiliate" element={<AffiliateProgram />} />
          <Route path="/scale-your-car-dealership-resources" element={<ScaleCarDealershipResources />} />
          <Route path="/project-status" element={<ProjectStatus />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
