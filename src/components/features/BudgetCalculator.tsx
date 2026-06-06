"use client";

import { useTripStore } from "@/store/useTripStore";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from "recharts";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#ff7300'];

export function BudgetCalculator() {
  const { budget, budgetCategories, updateBudgetCategory } = useTripStore();

  const totalActual = budgetCategories.reduce((sum, cat) => sum + cat.actual, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end border-b border-white/20 pb-4">
        <div>
          <p className="text-sm text-muted-foreground">Total Budget</p>
          <p className="text-2xl font-bold">₹{budget}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Actual Spent</p>
          <p className={`text-xl font-bold ${totalActual > budget ? 'text-destructive' : 'text-green-500'}`}>
            ₹{totalActual}
          </p>
        </div>
      </div>

      <div className="w-full">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={budgetCategories.filter(c => c.actual > 0)}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              paddingAngle={5}
              dataKey="actual"
            >
              {budgetCategories.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <RechartsTooltip formatter={(value) => `₹${value}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Expenses</h4>
        {budgetCategories.map(cat => (
          <div key={cat.id} className="flex items-center gap-4">
            <Label className="w-24 text-right">{cat.name}</Label>
            <Input 
              type="number" 
              value={cat.actual || ""}
              onChange={(e) => updateBudgetCategory(cat.id, parseInt(e.target.value) || 0)}
              className="flex-1 bg-white/10"
              placeholder="0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
