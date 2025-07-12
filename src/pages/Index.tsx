import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const nominations = [
    {
      id: "drawing",
      title: "Рисунок",
      description: "Живопись, графика, иллюстрации",
      icon: "Palette",
      gradient: "from-creative-coral to-creative-cream",
    },
    {
      id: "craft",
      title: "Поделка",
      description: "Скульптура, керамика, рукоделие",
      icon: "Scissors",
      gradient: "from-creative-mint to-creative-sage",
    },
    {
      id: "photo",
      title: "Фотография",
      description: "Художественная фотография",
      icon: "Camera",
      gradient: "from-creative-sage to-creative-mint",
    },
    {
      id: "literature",
      title: "Литература",
      description: "Сочинения, поэзия, проза",
      icon: "PenTool",
      gradient: "from-creative-cream to-creative-coral",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-creative-cream/10 to-creative-sage/10">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-creative-coral to-creative-mint rounded-xl flex items-center justify-center">
                <Icon name="Palette" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-creative-coral to-creative-mint bg-clip-text text-transparent">
                Творческий Конкурс
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => setActiveSection("home")}
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "home" ? "bg-primary text-white" : "hover:bg-gray-100"}`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection("register")}
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "register" ? "bg-primary text-white" : "hover:bg-gray-100"}`}
              >
                Регистрация
              </button>
              <button
                onClick={() => setActiveSection("submit")}
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "submit" ? "bg-primary text-white" : "hover:bg-gray-100"}`}
              >
                Подача заявки
              </button>
              <button
                onClick={() => setActiveSection("payment")}
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "payment" ? "bg-primary text-white" : "hover:bg-gray-100"}`}
              >
                Оплата
              </button>
              <button
                onClick={() => setActiveSection("certificates")}
                className={`px-4 py-2 rounded-lg transition-all ${activeSection === "certificates" ? "bg-primary text-white" : "hover:bg-gray-100"}`}
              >
                Дипломы
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      {activeSection === "home" && (
        <div>
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage:
                  "url(/img/64111081-f384-42e2-be45-c8e03aebdcd8.jpg)",
              }}
            />
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-creative-coral via-creative-mint to-creative-sage bg-clip-text text-transparent animate-fade-in">
                  Творческий Конкурс 2025
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in">
                  Покажи свой талант миру! Участвуй в конкурсе и получи
                  заслуженное признание
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center animate-scale-in">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-creative-coral to-creative-mint hover:scale-105 transition-all duration-300"
                    onClick={() => setActiveSection("register")}
                  >
                    <Icon name="UserPlus" size={20} className="mr-2" />
                    Зарегистрироваться
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-creative-coral text-creative-coral hover:bg-creative-coral hover:text-white transition-all duration-300"
                    onClick={() => setActiveSection("submit")}
                  >
                    <Icon name="Upload" size={20} className="mr-2" />
                    Подать работу
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 animate-pulse">
              <div className="w-16 h-16 bg-gradient-to-r from-creative-coral to-creative-cream rounded-full opacity-60" />
            </div>
            <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
              <div className="w-24 h-24 bg-gradient-to-r from-creative-mint to-creative-sage rounded-full opacity-40" />
            </div>
          </section>

          {/* Nominations Section */}
          <section className="py-20 bg-white/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">
                  Номинации конкурса
                </h2>
                <p className="text-xl text-gray-600">
                  Выберите свое направление творчества
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {nominations.map((nomination, index) => (
                  <Card
                    key={nomination.id}
                    className="group hover:scale-105 transition-all duration-500 border-2 hover:border-primary cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${nomination.gradient} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                      >
                        <Icon
                          name={nomination.icon}
                          size={32}
                          className="text-white"
                        />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">
                        {nomination.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {nomination.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Badge
                        variant="outline"
                        className="bg-gradient-to-r from-creative-coral/10 to-creative-mint/10 border-creative-coral text-creative-coral"
                      >
                        Участвовать
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-creative-coral to-creative-mint rounded-xl flex items-center justify-center">
                      <Icon name="Trophy" size={32} className="text-white" />
                    </div>
                    <CardTitle>Награды и призы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Все участники получают дипломы, лауреаты - особые награды
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-creative-mint to-creative-sage rounded-xl flex items-center justify-center">
                      <Icon
                        name="CreditCard"
                        size={32}
                        className="text-white"
                      />
                    </div>
                    <CardTitle>Взнос участника</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Символический взнос покрывает организационные расходы
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-creative-sage to-creative-cream rounded-xl flex items-center justify-center">
                      <Icon name="Calendar" size={32} className="text-white" />
                    </div>
                    <CardTitle>Сроки проведения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Прием заявок до 31 марта, подведение итогов до 15 апреля
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Registration Section */}
      {activeSection === "register" && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-creative-coral to-creative-mint rounded-2xl flex items-center justify-center">
                  <Icon name="UserPlus" size={32} className="text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-800">
                  Регистрация участника
                </CardTitle>
                <CardDescription className="text-lg">
                  Заполните форму для участия в конкурсе
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Имя</Label>
                    <Input
                      id="firstName"
                      placeholder="Введите имя"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input
                      id="lastName"
                      placeholder="Введите фамилию"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="age">Возраст</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Введите возраст"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="nomination">Номинация</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Выберите номинацию" />
                    </SelectTrigger>
                    <SelectContent>
                      {nominations.map((nom) => (
                        <SelectItem key={nom.id} value={nom.id}>
                          {nom.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-creative-coral to-creative-mint hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Icon name="Check" size={20} className="mr-2" />
                  Зарегистрироваться
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Submit Work Section */}
      {activeSection === "submit" && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-creative-mint to-creative-sage rounded-2xl flex items-center justify-center">
                  <Icon name="Upload" size={32} className="text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-800">
                  Подача работы
                </CardTitle>
                <CardDescription className="text-lg">
                  Загрузите свою творческую работу
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="workTitle">Название работы</Label>
                  <Input
                    id="workTitle"
                    placeholder="Введите название работы"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="workDescription">Описание работы</Label>
                  <Textarea
                    id="workDescription"
                    placeholder="Расскажите о своей работе..."
                    className="mt-1"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="workFile">Файл работы</Label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                    <Icon
                      name="Upload"
                      size={48}
                      className="mx-auto text-gray-400 mb-4"
                    />
                    <p className="text-gray-600">
                      Перетащите файл сюда или нажмите для выбора
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Поддерживаются: JPG, PNG, PDF, DOC (макс. 10MB)
                    </p>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-creative-mint to-creative-sage hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить работу
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Payment Section */}
      {activeSection === "payment" && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-creative-sage to-creative-cream rounded-2xl flex items-center justify-center">
                  <Icon name="CreditCard" size={32} className="text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-800">
                  Оплата участия
                </CardTitle>
                <CardDescription className="text-lg">
                  Оплатите взнос для участия в конкурсе
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-creative-coral/10 to-creative-mint/10 p-6 rounded-xl border border-creative-coral/20">
                  <h3 className="text-xl font-bold mb-2">Стоимость участия</h3>
                  <div className="text-3xl font-bold text-creative-coral mb-2">
                    500 ₽
                  </div>
                  <p className="text-gray-600">
                    Включает обработку заявки, экспертную оценку и изготовление
                    диплома
                  </p>
                </div>

                <div>
                  <Label>Способ оплаты</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <Button variant="outline" className="h-16 border-2">
                      <Icon name="CreditCard" size={24} className="mr-2" />
                      Картой
                    </Button>
                    <Button variant="outline" className="h-16 border-2">
                      <Icon name="Smartphone" size={24} className="mr-2" />
                      СБП
                    </Button>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-creative-sage to-creative-cream text-gray-800 hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Icon name="Lock" size={20} className="mr-2" />
                  Оплатить 500 ₽
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Безопасная оплата через защищенное соединение
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Certificates Section */}
      {activeSection === "certificates" && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Дипломы и награды
              </h2>
              <p className="text-xl text-gray-600">
                Все участники получают персональные дипломы
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:scale-105 transition-all duration-300 border-2 hover:border-primary">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                    <Icon name="Trophy" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">
                    Диплом лауреата I степени
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    Для работ высшего качества
                  </p>
                  <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
                    Золото
                  </Badge>
                </CardContent>
              </Card>

              <Card className="hover:scale-105 transition-all duration-300 border-2 hover:border-primary">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl flex items-center justify-center">
                    <Icon name="Award" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">
                    Диплом лауреата II степени
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    За отличные творческие работы
                  </p>
                  <Badge className="bg-gradient-to-r from-gray-400 to-gray-600 text-white">
                    Серебро
                  </Badge>
                </CardContent>
              </Card>

              <Card className="hover:scale-105 transition-all duration-300 border-2 hover:border-primary">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                    <Icon name="Medal" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">
                    Диплом лауреата III степени
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    За хорошие творческие работы
                  </p>
                  <Badge className="bg-gradient-to-r from-orange-400 to-orange-600 text-white">
                    Бронза
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-creative-coral/10 to-creative-mint/10 border-creative-coral/20">
                <CardContent className="p-8">
                  <Icon
                    name="FileText"
                    size={48}
                    className="mx-auto text-creative-coral mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-4">Диплом участника</h3>
                  <p className="text-gray-600 mb-6">
                    Каждый участник конкурса получает именной диплом в
                    электронном виде с возможностью печати
                  </p>
                  <Button className="bg-gradient-to-r from-creative-coral to-creative-mint">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать образец
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-creative-coral to-creative-mint rounded-lg flex items-center justify-center">
                  <Icon name="Palette" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">Творческий Конкурс</span>
              </div>
              <p className="text-gray-400">
                Платформа для showcasing творческих талантов
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <p className="text-gray-400 flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  contest@example.com
                </p>
                <p className="text-gray-400 flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 hover:bg-creative-coral"
                >
                  <Icon name="Facebook" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 hover:bg-creative-mint"
                >
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 hover:bg-creative-sage"
                >
                  <Icon name="Youtube" size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Творческий Конкурс. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
