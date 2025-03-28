import React from 'react';

export default function Recommend() {
  return (
    <div className='prose mx-auto mb-10 mt-48 max-w-3xl'>
     <h1>Sources of Recommendations</h1>

    <h2>1. Overview</h2>
    <p>Live150 focuses on enabling strong wellness footholds in Nutrition, Activity/Exercise, Mindfulness and Sleep, by driving daily
        interventions to help users achieve their wellness goals. Our framework to quantify, assess, and guide users is centered around creating AIpowered personalized recommendations for the users, across the 4 pillars of wellness - Nutrition, Activity/Exercise, Mindfulness and Sleep.
        </p>

        <h2>Calculating BMI, BMR, and TDEE</h2>

        <h3>2.1 Body Mass Index (BMI)</h3>
        <p>BMI is a simple body weight and fat screening tool, calculated using a person’s current body weight and height. It is a high-level ratio that indicates whether a person is underweight, ideal, overweight, or obese for their height.</p>
        <p><strong>BMI (in kg/m<sup>2</sup>) = [Current Weight in kg / (Height in m)<sup>2</sup>]</strong></p>
        <p>In addition to body screening, BMI helps calculate the ideal body weight range for a user. The ideal weight (in kg) for an adult (Age &gt; 20 years) is determined as follows:</p>
        <ul>
            <li>Lower Limit (BMI 18.5) = 18.5 x (Height in m)<sup>2</sup></li>
            <li>Upper Limit (BMI 24.9) = 24.9 x (Height in m)<sup>2</sup></li>
        </ul>
        <p><br/>This classification is based on the World Health Organization’s BMI chart and adult weight categories.<br/></p>
        <p><strong>Sources of Reference:</strong></p>
        <ul>
            <li><a href="https://www.calculator.net/bmi-calculator.html">BMI Formula - BMI Calculator</a></li>
            <li><a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm">Calculate Your BMI - Standard BMI Calculator</a></li>
            <li><a href="https://www.worldobesity.org/about/about-obesity/obesity-classification">BMI Chart - Obesity Classification | World Obesity Federation</a></li>
            <li><a href="https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations">A Healthy Lifestyle - WHO Recommendations</a></li>
        </ul>
        
        <h3>2.2 Basal Metabolic Rate (BMR)</h3>
        <p>BMR is the minimum no. of daily calories/energy the body needs at rest to maintain vital functions such as breathing and keeping warm, or
            basic metabolism functions</p>
        <p>BMR is key to estimate and set caloric goals, like nutritional intake or physical exercise burn goals especially for users who want to either
            lose, maintain or gain weight.</p>

        <p>There are many equations to calculate BMR but the Mifflin-St Jeor Equation is widely considered the most accurate one.</p>    

        <ul>
            <li><strong>For Men: <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp;</strong> BMR (in kcal/day) = (10 × Current Weight in kg) + (6.25 × Height in cm) − (5 × Age in years) + 5</li><br/>
            <li><strong>For Women: <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp;</strong> BMR (in kcal/day) = (10 × Current Weight in kg) + (6.25 × Height in cm) − (5 × Age in years) - 161</li>
        </ul>
        <p>While the formulae were created only for the binary genders of Male and Female, to accommodate for inclusivity of other non-binaries, we at
            Live150 considered for the following:</p>

        <li><strong> For all other genders “Other”: Take an average of BMR (Male) and BMR (Female)</strong></li>
        <p><strong>BMR (in kcal/day) = [BMR (Male) + BMR (Female)] / 2</strong></p>

        <p>The extrapolation of a person’s BMR by factoring in the user’s daily physical exercise on top of the basic metabolic functioning, like
            workouts or playing a sport, results in another important metric called the TDEE.
            </p>
        <p><strong>Sources of Reference:</strong></p>
        <ul>
            <li><a href="https://www.calculator.net/bmr-calculator.html">BMR Calculator</a></li>
            <li><a href="https://www.maxhealthcare.in/calculator/bmr">BMR Calculator - Calculate Basal Metabolic Rate for Men & Women</a></li>
            <li><a href="https://blog.nasm.org/nutrition/resting-metabolic-rate-how-to-calculate-and-improve-yours">Resting Metabolic Rate: How to Calculate and Improve Yours</a></li>
        </ul>
        
        <h3>2.3 Total Daily Energy Expenditure (TDEE)</h3>
        <p>TDEE as the name suggests is the total no. of calories a person would require or burn in a day, including all activities. It is calculated by
            multiplying the BMR by a fitness/activity factor.
            </p>
        <p><strong>TDEE (in kcal/day) = BMR x Activity Factor</strong></p>
        <p>The Activity Factor is the multiplier used to estimate the proportionate energy expenditure of a user, based on their current fitness activity
            levels:</p>

            <p>The Activity Factor question is asked to the users as part of the user onboarding flow in the Live150 app, which captures the
                average physical activity levels of users based on how much they workout in a week.
                The 5-grade options of 'activity levels' as mentioned below are a standard scale of options that are widely used. The options are
                modular, and can be either condensed to a lesser grade scale like 3 options of Low, Medium, High, or even extend to a higher
                grade scale, by relatively adjusting the ratios or the multiplying factors.</p>
        <ul>
            <li>Sedentary (little or no exercise): TDEE = BMR × 1.2</li>
            <li>Lightly Active (1-3 days/week): TDEE = BMR × 1.375</li>
            <li>Moderately Active (3-5 days/week): TDEE = BMR × 1.55</li>
            <li>Very Active (6-7 days/week): TDEE = BMR × 1.725</li>
            <li>Super Active (very hard exercise or physical job): TDEE = BMR × 1.9</li>
        </ul>
        <p><strong>Sources of Reference:</strong></p>
        <ul>
            <li><a href="https://www.forbes.com/health/nutrition/tdee-calculator/">TDEE Calculator: Calculate Your Total Daily Energy Expenditure</a></li>
            <li><a href="https://www.healthline.com/health/how-to-calculate-your-basal-metabolic-rate">Basal Metabolic Rate Calculator</a></li>
        </ul>
        <h2>Setting Nutritional Goals</h2>
<p>A user’s nutritional goals are set based on their health objectives, like losing weight, building muscle, or managing blood glucose levels. These goals have two main components:</p>
<ul>
    <li><strong>Calorie Intake Budget:</strong> Specifies the average daily calories a user should consume to achieve their health goals.</li>
    <li><strong>Macros Distribution and Thresholds:</strong> Focuses on nutrient composition, especially macronutrients like Protein, Carbs, Fat, and Sugar (a component of Carbs). It highlights beneficial foods and those to avoid.</li>
</ul>

<p>These 2 components of a user’s nutritional goals together inform the creation of a personalized diet plan for the user, catering to their health
    goals. </p>
    <h3>3.1 Caloric Adjustment</h3>
    <p>There’s a certain caloric adjustment needed, which is the amount of energy the user would either need to burn or consume, depending on whether the user wants to lose or gain weight. If the user doesn’t have a weight goal, it is assumed that the user would then have to maintain weight, neither losing nor gaining any weight.</p>
    
    <p><strong>The basic principles for caloric adjustments are:</strong></p>
    <ul>
        <li>1 kg of weight is approximately equivalent to 7700 kcal.</li>
        <li>To lose 1 kg of weight, a deficit of 7700 kcal is needed.</li>
        <li>To gain 1 kg of weight, a surplus of 7700 kcal is needed.</li>
        <li>To maintain weight, the Caloric Factor is essentially 0 kcal.</li>
    </ul>
    
    <p>With that in mind, the caloric adjustment is calculated as follows:</p>
    <ul>
        <li><strong>Total Caloric Adjustment (in kcal):</strong> Weight Goal in kg × 7700</li>
        <li><strong>Weekly Caloric Adjustment (in kcal/week):</strong> (Weight Goal in kg × 7700) / Duration in weeks</li>
        <li><strong>Daily Caloric Adjustment (in kcal/day):</strong> (Weight Goal in kg × 7700) / Duration in days</li>
    </ul>
    
    <p>The Weight Goal (in kg) here refers to the absolute change in weight that the user is aiming for:</p>
    <p><strong>Weight Goal (in kg) = Target Weight in kg - Current Weight in kg</strong></p>
    <ul>
        <li>If “Weight Goal = 0”, the user wants to “Maintain Weight.”</li>
        <li>If “Weight Goal &lt; 0”, the user wants to “Lose Weight.”</li>
        <li>If “Weight Goal &gt; 0”, the user wants to “Gain Weight.”</li>
    </ul>
    
    <h3>3.2 Calorie Intake Goal (in kcal/day)</h3>
    <p>The calorie intake goal is the total daily caloric budget for the user calculated depending on the user’s weight goal. It is the TDEE adjusted
        for the caloric adjustment from before.
        </p>
    
    <p>Depending on the user’s weight goal, the caloric adjustments should be made such that if a user wants to lose weight, there should be a net
        calorie deficit, if the user wants gain weight, there should be a net calorie surplus and if the user wants to maintain weight, no adjustments
        are needed.</p>

    <p> If the user doesn’t have a specific weight goal, then it is equivalent to weight maintenance, and the calorie goal is set accordingly.</p>

    <ul>
        <li><strong>Maintain Weight:</strong> Calorie Intake Goal (in kcal/day) = TDEE</li>
        <li><strong>Lose Weight (Calorie Deficit):</strong> Daily Calorie Intake Goal (in kcal/day) = TDEE - Daily Caloric Adjustment</li>
        <li><strong>Gain Weight (Calorie Surplus):</strong> Daily Calorie Intake Goal (in kcal/day) = TDEE + Daily Caloric Adjustment</li>
    </ul>
    
    <h4>Sources of Reference</h4>
    <p>The calorie quantum equivalent to 1 kg of weight is an approximation developed by Max Wishnofsky in 1958, widely adapted to understand short-term weight changes and their respective caloric implications.</p>
    <ul>
        <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4035446/">NCBI - WWW Error Blocked Diagnostic</a></li>
        <li><a href="https://onefitness.com.au/the-real-facts-about-burning-body-fat/">The 'Real' Facts About Burning Body Fat | One Fitness</a></li>
        <li><a href="https://www.mynetdiary.com/calorie-planning.html">How to Plan Your Calories for Weight Loss or Gain with MyNetDiary</a></li>
        <li><a href="https://bebodywise.com/blog/how-many-calories-is-1-kg/">How Many Calories Is 1 Kg | Is Losing 1kg a Week Healthy</a></li>
    </ul>
    
    <p>If the user doesn’t have a specific weight goal, it is equivalent to weight maintenance, and the calorie goal is set accordingly.</p>

    <ul>
        <li><strong>1. Maintain Weight:</strong> Calorie Intake Goal (in kcal/day) = TDEE</li>
        <li><strong>2. Lose Weight (Calorie Deficit):</strong> Daily Calorie Intake Goal (in kcal/day) = TDEE - [Daily Caloric Adjustment in kcal/day]</li>
        <li><strong>3. Gain Weight (Calorie Surplus):</strong> Daily Calorie Intake Goal (in kcal/day) = TDEE + [Daily Caloric Adjustment in kcal/day]</li>
    </ul>
    
    <h4>Sources of Reference</h4>
    <p>The calorie quantum equivalent to 1 kg of weight is an approximated equation developed by Max Wishnofsky in 1958, which is widely adapted to understand short-term weight changes and their respective caloric implications.</p>
    <ul>
        <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4035446/">NCBI - WWW Error Blocked Diagnostic</a></li>
        <li><a href="https://onefitness.com.au/the-real-facts-about-burning-body-fat/">The 'Real' Facts About Burning Body Fat | One Fitness</a></li>
        <li><a href="https://www.mynetdiary.com/calorie-planning.html">How to Plan Your Calories for Weight Loss or Gain with MyNetDiary</a></li>
        <li><a href="https://bebodywise.com/blog/how-many-calories-is-1-kg/">How Many Calories Is 1 Kg | Is Losing 1kg a Week Healthy</a></li>
    </ul>
    <p>If the user doesn’t have a specific weight goal, it is equivalent to weight maintenance, and the calorie goal is set accordingly.</p>
    
    <h3>3.3 Macros Distribution (in g)</h3>
    <p>Having the right balance of macronutrients in the diet is essential for users to reach their health goals. Balancing the diet is vital not only for weight loss or diabetes but for overall health goals. The caloric intake goal needs to be supplemented with the right mix of macros (in grams) to meet the user’s health needs.</p>
    <p>The macro weights are determined daily as a percentage of the user’s caloric intake budget. Here are key considerations based on the user’s health goal:</p>
    
    <h4>Sources of Reference</h4>
    <ul>
        <li><a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet">Healthy Diet</a></li>
        <li><a href="https://www.healthline.com/nutrition/best-macronutrient-ratio#ideal-macro-ratio">The Best Macronutrient Ratio for Weight Loss</a></li>
        <li><a href="https://pubmed.ncbi.nlm.nih.gov/15107010/">NCBI - WWW Error Blocked Diagnostic</a></li>
        <li><a href="https://www.mdpi.com/2072-6643/15/20/4314">Dietary and Nutritional Guidelines for People with Diabetes</a></li>
    </ul>
    
    <table border="1">
        <thead>
            <tr>
                <th>Health Goal</th>
                <th>Macros</th>
                <th>Macros Formulation</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Weight Loss</td>
                <td>
                    Carbs - 45% (Sugar - 10%)<br/>
                    Protein - 30%<br/>
                    Fat - 25%
                </td>
                <td>
                    1. Carbs (g/day) = [0.45 x Daily Calorie Intake Goal] / 4<br/>
                    &nbsp;&nbsp;&nbsp;Sugar (g/day) = 0.10 x Carbs (g/day)<br/>
                    2. Protein (g/day) = [0.30 x Daily Calorie Intake Goal] / 4<br/>
                    3. Fat (g/day) = [0.25 x Daily Calorie Intake Goal] / 9
                </td>
            </tr>
            <tr>
                <td>Gain Weight OR Build Muscle</td>
                <td>
                    Carbs - 55% (Sugar - 15%)<br/>
                    Protein - 20%<br/>
                    Fat - 25%
                </td>
                <td>
                    1. Carbs (g/day) = [0.55 x Daily Calorie Intake Goal] / 4<br/>
                    &nbsp;&nbsp;&nbsp;Sugar (g/day) = 0.15 x Carbs (g/day)<br/>
                    2. Protein (g/day) = [0.20 x Daily Calorie Intake Goal] / 4<br/>
                    3. Fat (g/day) = [0.25 x Daily Calorie Intake Goal] / 9
                </td>
            </tr>
            <tr>
                <td>Maintain Weight</td>
                <td>
                    Carbs - 50% (Sugar - 12%)<br/>
                    Protein - 25%<br/>
                    Fat - 25%
                </td>
                <td>
                    1. Carbs (g/day) = [0.50 x Daily Calorie Intake Goal] / 4<br/>
                    &nbsp;&nbsp;&nbsp;Sugar (g/day) = 0.12 x Carbs (g/day)<br/>
                    2. Protein (g/day) = [0.25 x Daily Calorie Intake Goal] / 4<br/>
                    3. Fat (g/day) = [0.25 x Daily Calorie Intake Goal] / 9
                </td>
            </tr>
            <tr>
                <td>Diabetes</td>
                <td>
                    Carbs - 45% (Sugar - 7%)<br/>
                    Protein - 25%<br/>
                    Fat - 30%
                </td>
                <td>
                    1. Carbs (g/day) = [0.45 x Daily Calorie Intake Goal] / 4<br/>
                    &nbsp;&nbsp;&nbsp;Sugar (g/day) = 0.07 x Carbs (g/day)<br/>
                    2. Protein (g/day) = [0.25 x Daily Calorie Intake Goal] / 4<br/>
                    3. Fat (g/day) = [0.30 x Daily Calorie Intake Goal] / 9
                </td>
            </tr>
            <tr>
                <td>Pre-Diabetes</td>
                <td>
                    Carbs - 50% (Sugar - 10%)<br/>
                    Protein - 20%<br/>
                    Fat - 30%
                </td>
                <td>
                    1. Carbs (g/day) = [0.50 x Daily Calorie Intake Goal] / 4<br/>
                    &nbsp;&nbsp;&nbsp;Sugar (g/day) = 0.10 x Carbs (g/day)<br/>
                    2. Protein (g/day) = [0.20 x Daily Calorie Intake Goal] / 4<br/>
                    3. Fat (g/day) = [0.30 x Daily Calorie Intake Goal] / 9
                </td>
            </tr>
            <tr>
                <td>Normal Blood Sugar</td>
                <td>
                    Carbs - 50% (Sugar - 12%)<br/>
                    Protein - 25%<br/>
                    Fat - 25%
                </td>
                <td>
                    1. Carbs (g/day) = [0.50 x Daily Calorie Intake Goal] / 4<br/>
                    &nbsp;&nbsp;&nbsp;Sugar (g/day) = 0.12 x Carbs (g/day)<br/>
                    2. Protein (g/day) = [0.25 x Daily Calorie Intake Goal] / 4<br/>
                    3. Fat (g/day) = [0.25 x Daily Calorie Intake Goal] / 9
                </td>
            </tr>
        </tbody>
    </table>
    <h2>4. Setting Physical Activity Goals</h2>

    <h3>4.1 Calorie Burn Goal (in kcal)</h3>
    <p>The physical activities are derived based on the BMR, TDEE, and the set nutritional caloric intake goal by balancing the overall caloric needs of the user. So the physical activity goal is set as follows:</p>
    <p><strong>Daily Calorie Burn Goal (in kcal) = TDEE - BMR</strong></p>
    
    <h2>5. Calculating Sleep Score</h2>
    <p>Live150 incorporates a robust framework to assess the sleep activities of the users, backed by scientific principles. There are 6 core attributes that mainly contribute to the calculation of the sleep score, as listed below:</p>
    
    <ol>
        <li><strong>Total Sleep Duration</strong> - The number of hours of sleep is a major factor in defining sleep health. For adults, the ideal duration is estimated to be around 7-8 hours.</li>
        <li><strong>Sleep Continuity</strong> - Getting uninterrupted, continuous sleep is highly important.</li>
        <li><strong>Optimal Sleep Timing</strong> - The time a user goes to sleep plays a key role. For adults, the ideal time is generally between 10 PM and 11 PM, aligning with natural circadian rhythms and reflecting better sleep quality.</li>
        <li><strong>Bedtime Consistency</strong> - Having a consistent sleep and wake time allows the internal circadian rhythm to operate more efficiently, helping users fall asleep faster and stay asleep.</li>
        <li><strong>Wake-up Time Consistency</strong></li>
        <li><strong>Sleep Quality</strong> - This is a qualitative rating that broadly reflects the user’s comfort levels and restfulness while sleeping, experienced upon waking up.</li>
    </ol>
    
    <p><strong>Sleep Tasks Completion</strong> - The user’s daily progress in completing recommended tasks for sleep improvement.</p>

    <h4>Sources of Reference</h4>
<ul>
    <li><a href="https://www.nhlbi.nih.gov/health/sleep/how-much-sleep">Optimal Sleep Hours - How Much Sleep Is Enough? | NHLBI, NIH</a></li>
    <li><a href="https://www.sleepfoundation.org">Assess Your Sleep Needs</a></li>
    <li><a href="https://www.sleep.com/sleep-health/sleep-schedule">Consistency in Sleep Schedule - Why A Sleep Schedule Could Change Your Life</a></li>
    <li><a href="https://www.thensf.org/setting-a-regular-sleep-schedule">Setting a Regular Sleep Schedule - National Sleep Foundation</a></li>
</ul>

<p>Validated by in-house experts and sleep coaches, our approach holistically looks at multiple aspects of a user’s sleep activity and arrives at a simplified singular metric (scored out of 100) that represents the overall sleep score of the user, by using weighted aggregation of individual scores graded for each of the 6 factors that impact sleep.</p>

<p>The sleep score is also qualitatively graded and labeled to indicate the sleep health of the user:</p>

<ul>
    <li><strong>Excellent:</strong> 90-100 Sleep Score</li>
    <li><strong>Good:</strong> 75-89 Sleep Score</li>
    <li><strong>Fair:</strong> 50-74 Sleep Score</li>
    <li><strong>Poor:</strong> &lt; 50 Sleep Score</li>
</ul>

<p>A high-level view of the scoring framework is detailed below:</p>


<table border="1">
    <thead>
        <tr>
            <th>Sleep Attribute</th>
            <th>Calculation & Inference</th>
            <th>% Weight in Sleep Score Calculation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Total Sleep Duration</td>
            <td>If a user sleeps for 8-9 hours, the user is assigned +100 points, and anything more or less will have proportionately lesser points.</td>
            <td>30%</td>
        </tr>
        <tr>
            <td>Bedtime Consistency</td>
            <td>Consistency in bedtimes are calculated through standard deviation of historic data, and a deviation of &lt; 60 mins is considered ideal with +100 points. The higher the deviation, the lesser points a user gets.</td>
            <td>10%</td>
        </tr>
        <tr>
            <td>Wake-up Time Consistency</td>
            <td>Similar to how bedtime consistency is assessed.</td>
            <td>10%</td>
        </tr>
        <tr>
            <td>Optimal Sleep Timing</td>
            <td>The ideal bedtime for adults is considered to be 10-11 PM, assigned +100 points, and any other time outside of this window is proportionately assigned lesser points.</td>
            <td>20%</td>
        </tr>
        <tr>
            <td>Sleep Continuity</td>
            <td>A deep continuous sleep with no interruptions is ideal, and is assigned +100 points. The more the interruptions, the lesser points the user gets assigned.</td>
            <td>20%</td>
        </tr>
        <tr>
            <td>Sleep Quality</td>
            <td>A self-assessed quality rating graded by the user out of 5, that represents the user’s freshness and satisfaction with the sleep, after waking up.</td>
            <td>10%</td>
        </tr>
    </tbody>
</table>

<h2>6. Personalized Recommendations</h2>
<p>Live150 leverages the power of AI to personalize recommendations dynamically, and in real-time based on the user’s actions in the app. The recommendations are multi-faceted and are primarily driven by key user information we capture through our robust onboarding questionnaire, that aims to understand user’s health goals, lifestyle choices, fitness levels, diet preferences, sleeping habits, medical conditions and more.</p>

<p>All of these critical data points are meticulously channeled from different end points and parsed together and sent to the OpenAI LLM engine, to get structured, guided responses back, and presented as recommendations. The LLM is constantly fed with a corpus of rules and expert-guided prompts derived from credited sources and scientific institutions, engineered to make sure the recommendations satisfy the fundamental principles of science and wellness.</p>

<p>The recommendations are garnered across Nutrition, Physical Activity, Mindfulness, and Sleep, which as mentioned, form the foundational pillars to our health guidance framework.</p>
    
    </div>
  );
}
