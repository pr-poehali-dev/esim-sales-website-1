import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-orange-50/30 to-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Icon name="Smartphone" size={32} className="text-orange-500" />
            <span className="text-2xl font-bold text-gray-900">ESIM Spain</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#constructor"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Конструктор
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              FAQ
            </a>
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50"
            >
              Личный кабинет
            </Button>
          </div>
        </nav>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 opacity-20">
          <Icon name="Wifi" size={48} className="text-orange-300" />
        </div>
        <div className="absolute bottom-32 left-10 opacity-20">
          <Icon name="Signal" size={32} className="text-orange-300" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <Badge className="bg-orange-100 text-orange-700 mb-6 text-sm px-4 py-2">
              🚀 Мгновенная активация через QR-код
            </Badge>

            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Интернет в
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {" "}
                Европе
              </span>
              <br />
              за 2 минуты
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Забудьте о дорогом роуминге. Получите eSIM для 28 стран Европы с
              оплатой в рублях и мгновенной активацией.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <Icon name="Globe" size={16} className="text-orange-500" />
                <span className="text-sm font-medium text-gray-700">
                  28 стран ЕС
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <Icon name="Zap" size={16} className="text-orange-500" />
                <span className="text-sm font-medium text-gray-700">
                  За 2 минуты
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <Icon name="CreditCard" size={16} className="text-orange-500" />
                <span className="text-sm font-medium text-gray-700">
                  Оплата в ₽
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() =>
                  document
                    .getElementById("constructor")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Создать тариф
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-orange-500 px-8 py-4 text-lg font-semibold"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Main visual */}
            <div className="relative bg-gradient-to-br from-orange-100 via-orange-50 to-white rounded-3xl p-12 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-3xl"></div>

              {/* Phone mockup */}
              <div className="relative z-10 mx-auto w-64 h-96 bg-gray-900 rounded-[2.5rem] p-2 shadow-xl">
                <div className="w-full h-full bg-white rounded-[2rem] relative overflow-hidden">
                  {/* Status bar */}
                  <div className="h-8 bg-gray-50 flex items-center justify-between px-6 text-xs font-medium">
                    <span>🇪🇸 Movistar ES</span>
                    <span>🔋 100%</span>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Icon name="Wifi" size={32} className="text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      eSIM Активна
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Интернет в Испании
                    </p>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <p className="text-xs text-orange-700">5GB из 10GB</p>
                      <div className="w-full bg-orange-200 rounded-full h-2 mt-1">
                        <div className="bg-orange-500 h-2 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating QR code */}
              <div className="absolute -right-6 top-16 bg-white rounded-xl p-3 shadow-lg transform rotate-12">
                <div className="w-16 h-16 bg-gray-900 rounded grid grid-cols-4 gap-1 p-1">
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-gray-900 rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-gray-900 rounded-sm"></div>
                  <div className="bg-gray-900 rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-gray-900 rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-gray-900 rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-gray-900 rounded-sm"></div>
                  <div className="bg-gray-900 rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-gray-900 rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                </div>
                <p className="text-xs text-gray-600 mt-1 text-center">
                  Скан QR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
